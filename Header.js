import React from 'react'


const Navbar = () => {
  return (
    <>
      <div className="container ">
        <div id="navbar">
          <div id="logo">
            <p></p>
          </div>
          <div id="center">
            {}
            <input className="search" type="search" placeholder="Search" aria-label="Search" />
          </div>
          <div id="right">
           
            <button className='btn1'>Sign Up</button>
            <button className='btn2'>Sign In</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default Navbar