import React from 'react'
import './navbar.css'
import { useRef } from 'react'
import { FaBars, FaTimes, FaReact } from 'react-icons/fa'

export default function Navbar() {

  const inputRef = useRef()

  const handleNavBtn=()=>{
    inputRef.current.classList.toggle("mobile_nav")
  }

  return (
    <div>
      <header>
        <h3 className='logo'><FaReact/></h3>
        <nav ref={inputRef}>
          <a href="/#">Home</a>
          <a href="/#">About</a>
          <a href="/#">Project</a>
          <a href="/#">Service</a>
          <a href="/#">Contact</a>
          <button className='nav_btn nav_close_btn' onClick={handleNavBtn}>
            <FaTimes/>
          </button>
        </nav>
        <button className='nav_btn' onClick={handleNavBtn}>
          <FaBars/>
        </button>
      </header>
    </div>
  )
}
