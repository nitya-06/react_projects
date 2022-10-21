import React, { useState,useEffect } from 'react';
import "./style.css";
import imag from '../components/basics/imag/todo.svg';

const getlocaldata = () =>{ // setting the initial inputdata of state hook to list in localstorage
  const list = localStorage.getItem("mytodolist");
  if(list){
    return JSON.parse(list);
  }
  else{
    return [];
  }
}

const Todo = () => {
  const [inputdata, setinputdata] = useState(""); // to get and store input 
  const [items,setitems] = useState(getlocaldata()); // to create list of tasks and also fetching any previous data stored in local storage
  const [isedititem,setisedititem] = useState(""); // to store the id of task to change
  const [togglebtn,settogglebtn] = useState(false);

  const additem = () =>{ // additing items
    if(inputdata===""){
    }
    else if(inputdata!==""&&togglebtn){
      setitems(
        items.map((curlem)=>{
          if(curlem.id===isedititem){
            return {...curlem,name: inputdata};
          }
          else{
            return curlem;
          }
        })
      )
      settogglebtn(false);
      setisedititem(null);
      setinputdata("");
    }
    else{
      const mynewdata={ // this to give each entry a unique id
        id: new Date().getTime().toString(),
        name: inputdata,
      }
      setitems([...items,mynewdata]);
      setinputdata("");
    }
  }; 

  const deleteitem = (id) =>{ // deleting items
    const updatedlist = items.filter((curlem)=>{
      return curlem.id !==id;
    })
    setitems(updatedlist);
  };
  
  const deleteall = () =>{ // deleting all
      // setitems([]);
  };
  
  const edititem = (id)=>{
    // let name="";     // my way
    // const itemname = items.filter((curlem)=>{
    //   if(curlem.id===id){
    //     name=curlem.name;
    //   }
    // })
    // setinputdata(name);
    // deleteitem(id);

    // better way 
    const item_toedit = items.find((curlem)=>{
      return curlem.id===id;
    })
    setisedititem(id);
    settogglebtn(true);
    setinputdata(item_toedit.name);
  }

  // setting data in local storage
  useEffect(()=>{
    localStorage.setItem("mytodolist",JSON.stringify(items));
  },[items]);

  return (
    <>
    <div className='main-div'>
      <div className='child-div'>
        <figure>
          <img src={imag} alt="todologo" />
          <figcaption>Add Your List Here</figcaption>
        </figure>
        <div className='addItems'>
          <input 
          type="text" placeholder="✍🏼 Add Items" className='form-control' value={inputdata} onChange={(event)=> setinputdata(event.target.value)}
          />
          {togglebtn? <i className='far fa-edit add-btn' onClick={additem}></i>:<i className="fa fa-regular fa-plus" onClick={additem}></i>}
          <div>
            {/* show items */}
            <div className="showItems">
              {
                items.map((curlem)=>{
                  return(
                  <div className='eachItem' key={curlem.id}>
                    <h3>{curlem.name}</h3>
                    <div className='todo-btn'>
                    <i className="far fa-edit add-btn" onClick={()=> edititem(curlem.id)}></i>
                    <i className="far fa-trash-alt add-btn" onClick={()=>{
                      const confirmbox = window.confirm("are you sure want to delete this task")
                      if(confirmbox){
                        deleteitem(curlem.id);
                      }
                    }}></i>
                    </div>
                  </div>
                  )
                })
              }
          </div>
          </div>

          {/* remove all buttons */}
          <div className='showItems'>
            <button className="btn effect04" data-sm-link-text="Remove All" onClick={()=>{
              const confirmbox = window.confirm("are you sure want to delete all")
              if(confirmbox){
                setitems([]);
              }
            }}><span>Check List</span> </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Todo;