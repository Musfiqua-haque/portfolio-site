import React, { useState } from 'react'
import './navbar.css'
// import { useRef } from 'react'
import { FaBars, FaTimes, FaReact } from 'react-icons/fa'

export default function Navbar() {

  const[hamburgerClick, setHamburgerClick] = useState(false)
  
  const handleClick=()=>{
    setHamburgerClick(!hamburgerClick)
  }

  return (
    <div>
      <header>
        <div>
        <h3 className='logo'><FaReact/></h3>
        </div>
        <ul className={hamburgerClick ? 'nav-menu active' : 'nav-menu'}>
          <li><a href="/#">Home</a></li>
          <li><a href="/#">About</a></li>
          <li><a href="/#">Project</a></li>
          <li><a href="/#">Services</a></li>
          <li><a href="/#">Contact</a></li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
          {hamburgerClick ? <button className='hamburger_btn'>
            <FaTimes/>
          </button> : <button className='hamburger_btn'>
            <FaBars/>
          </button>}
        </div> 
      </header>
    </div>
  )
 }
