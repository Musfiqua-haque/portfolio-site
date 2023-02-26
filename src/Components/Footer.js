import React from 'react'
import './footer.css';
// import {NavLink} from 'react-router-dom'
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <wrapper>
        <div className="contact-short">
            <div className='top-contact'>
                <div className='footer-content'>
                    <h3>Ready to get started?</h3>
                    <h3>Talk to me today</h3>
                </div>

                <div>
                    <button>Get started</button>
                </div>
            </div>
        </div>

        <footer>
            <div className='footer-box'>
            <div className='footer-about'>
            <h3 className='footer-heading'>Rockstar developer</h3>
            <p className='inner-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, voluptas?Lorem ipsum dolor sit amet.</p>
            </div>

            <div className='footer-subscribe '>
            <h3 className='footer-heading'>Subscribe to get important updates</h3>
            <form action="#"className='mt-4 d-flex flex-column'>
                <input className='footer-input' type="email" required autoComplete='off' placeholder='Email' />
                <input className='footer-input' type="submit" value='subscribe'/>
            </form>
            </div>

            <div className='footer-social'>
            <h3 className='footer-heading'>Follow Us</h3>
            <div className="footer-social-icon d-flex">
            <div className='footer-icon'>
            <FaDiscord className='icons' />
            </div>
            <div className='footer-icon'>
            <FaInstagram className='icons'/>
            </div>
            <div className='footer-icon'>
            <FaYoutube className='icons' />
            </div> 
            </div>       
            </div>

            <div className='footer-contact'>
            <h3 className='footer-heading'>Contact Me</h3>
            <p className='inner-text'>+002134567</p>
            </div>
            </div>
        </footer>

    </wrapper>


  )
}


