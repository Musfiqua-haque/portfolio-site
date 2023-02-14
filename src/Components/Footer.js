import React from 'react'
import './footer.css';
// import {NavLink} from 'react-router-dom'
import { FaDiscord } from "react-icons/fa";

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

            <div className='footer-about'>
            <h3 className='footer-heading'>Subscribe to get important updates</h3>
            <form action="#"className='mt-4'>
                <input type="email" required autoComplete='off' placeholder='Email' />
                <input type="submit" value='subscribe'/>
            </form>
            </div>

            <div className='footer-about'>
            <h3 className='footer-heading'>Follow Us</h3>
            <div>
            <FaDiscord />
            </div>
            <div>
            <FaDiscord />
            </div>
            <div>
            <FaDiscord />
            </div>        
            </div>

            <div className='footer-about'>
            <h3 className='footer-heading'>Rockstar developer</h3>
            <p className='inner-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, voluptas?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, officia.</p>
            </div>
            </div>
        </footer>

    </wrapper>


  )
}


