import React from 'react'
import hero from '../images/hero.jpg'
// import Typed from 'react-typed'

export default function Header() {
  return (
    <div className='header-wraper'>
      <div className="header-logo">
        <img className='hero' src={hero} alt="Hero logo" />
      </div>
        <div className='main-info'>
            <h1>I am a Web developer</h1>
            <a href="#" className='contact-button'>Contact</a>
        </div>
    </div>
  )
}
