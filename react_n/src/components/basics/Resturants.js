import React, { useState } from "react";
import "./style.css";
import Menu from "./menuapi.js";
import MenuCard from "./MenuCard"
import Navbar from "./Navbar";

const uniquelist =[...new Set( // spread operator to create array
  Menu.map((curelm)=>{ // new set used to store unique elements
  return curelm.category;
})),
"All",
];
console.log(uniquelist);


export const Resturants = () => {
  const [menuData, setMenuData] = useState(Menu);  // hooks
  const [menuList, setMenuList] = useState(uniquelist);

  const filteritem=(cat)=>{
    if(cat==="All"){
      setMenuData(Menu);
      // return can also be used
    }
    else{
    const updatelist = Menu.filter((currelm)=>{
      return currelm.category === cat;
    });
    setMenuData(updatelist);
  }
  };
  return (
    <>
    {/* <nav className="navbar">
      <div className="btn-group"> */}
        {/* use fat arrow function so that function dosent class itself repeatidely */}
        {/* <button className="btn-group__item" onClick={()=>filteritem("Breakfast")}>Breakfast</button> 
        <button className="btn-group__item" onClick={()=>filteritem("Lunch")}>Lunch</button>
        <button className="btn-group__item" onClick={()=> filteritem("Snacks")}>Snacks</button>
        <button className="btn-group__item" onClick={()=> filteritem("Dinner")}>Dinner</button>
        <button className="btn-group__item" onClick={()=> setMenuData(Menu)}>All</button>
      </div>
    </nav> */}
    <Navbar navData = {menuList} filteritem={filteritem}/>
    <MenuCard menuData={menuData}/>
    </>
  );
};

// export default Resturants; we can use this also
