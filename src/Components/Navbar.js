import React from 'react'
// import logo from '../images/logo.jpg'
import navbar from '../images/navbar.jpg'

/* REACT FONTAWESOME IMPORT */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container">
  <a className='navbar-brand' href="#"><img className='logo' src={navbar} alt="portfolio-logo..." /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{color:'#fff'}}/>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav m-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About Me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Portfolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Work</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Conatct</a>
      </li>   
    </ul> 
  </div>
  </div>
</nav>
  )
}
