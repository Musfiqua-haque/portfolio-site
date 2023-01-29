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
            <h1>Musfiqua Haque</h1>
            <div className="title">
              <div className="title-wraper">
                <div className="title-item">React developer</div>
                <div className="title-item">web developer</div>
                <div className="title-item">Marketing</div>
                <div className="title-item">App developer</div>
              </div>
            </div>
            {/* <a href="#" className='contact-button'>Contact</a> */}
            <div className="header-icon">
              <FontAwesomeIcon className='social-icon' icon={faPhone} />
              <FontAwesomeIcon className='social-icon' icon={faEnvelope} />
              <FontAwesomeIcon className='social-icon' icon={faAddressCard} />
          </div>
        </div>
    </div>
  )
}
