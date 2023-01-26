import React from 'react'
import hero from '../images/hero.jpg'
// import Typed from 'react-typed'\


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faAddressCard} from '@fortawesome/free-solid-svg-icons'




export default function Header() {
  return (
    <div className='header-wraper'>
      <div className="header-logo">
        <img className='hero' src={hero} alt="Hero logo" />
      </div>
        <div className='main-info'>
            <h1>I am a Web developer</h1>
            <a href="#" className='contact-button'>Contact</a>
            <div className="header-icon">
              <FontAwesomeIcon icon={faPhone} style={{color:'white'}} />
              <FontAwesomeIcon icon={faEnvelope} style={{color:'white'}} />
              <FontAwesomeIcon icon={faAddressCard} style={{color:'white'}} />
          </div>
        </div>
    </div>
  )
}
