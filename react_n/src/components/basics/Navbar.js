import React from 'react'

const Navbar = ({navData,filteritem}) => {
  return (
    <>
    <nav className='navbar'>
        <div className='btn-group'>
            {navData.map((curlem) =>{
                return(
                    <>
                    <button className='btn-group__item' onClick={()=>filteritem(curlem)}>{curlem}</button>
                    </>
                )
            })}
        </div>
    </nav>
    </>
  )
}

export default Navbar