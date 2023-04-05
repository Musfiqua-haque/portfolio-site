import React from 'react'
import './banner.css'
// import hero from '../images/hero.jpg'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faAddressCard} from '@fortawesome/free-solid-svg-icons'




export default function Header() {
  return (
    <div className='header-wrapper'>
      {/* <div className="header-logo">
        <img src={hero} alt="Hero logo" />
      </div> */}
        <div className='main-info'>
            <h1 className='name mt-4'>Musfiqua Haque</h1>
            <div className="title">
              <div className="title-wrapper">
                <div className="title-item">React developer</div>
                <div className="title-item">web developer</div>
                <div className="title-item">designer</div>
                <div className="title-item">App developer</div>
              </div>
            </div>
            <div className="header-icon">
              <FontAwesomeIcon className='social-icon' icon={faPhone} />
              <FontAwesomeIcon className='social-icon' icon={faEnvelope} />
              <FontAwesomeIcon className='social-icon' icon={faAddressCard} />
          </div>
        </div>
    </div>
  )
}
