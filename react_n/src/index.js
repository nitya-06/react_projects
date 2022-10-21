import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

 // effect hooks can be used to save data automatically (ex in local storage)
// useEffect(() => { // it will come in efect after every render
      // const [myNum,setmyNum] = useEffect(initialData);
      //   console.log("hii");
      // });
      
// useEffect(() => { // it will come in efect after first page reload or anything we want
      // const [myNum,setmyNum] = useEffect(initialData);
//   console.log("hii"); // document.title used to change title anytime
// },[]);



// const reducer_function= (state, action_type)=>{ // reducer hook
//   if(action_type === "INCR"){
//     state+=1;
//   };
//   if(action_type === "DECR"){
//     state-=1;
//   }
//   return state;
// };

// const [state, dispatch] = useReducer(reducer_function, initialData); // dispatch used to trigger reducer_function
// <button onClick={()=> dispatch({type:"INCR"})}></button>;
// <button onClick={()=> dispatch({type:"DECR"})}></button>;



