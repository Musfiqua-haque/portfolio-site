import React from 'react'
import './footer.css';
// import {NavLink} from 'react-router-dom'

export default function Footer() {
  return (
    <wrapper>
        <div className="contact-short">
            <div className='top-contact'>
                <div>
                    <h3>Ready to get started?</h3>
                    <h3>Talk to me today</h3>
                </div>

                <div>
                    <button>Get started</button>
                </div>
            </div>
        </div>

        <footer>
            <div className='box'>
            <div className='footer-about'>
            <h3 className='footer-heading'>Rockstar developer</h3>
            <p className='inner-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, voluptas?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, officia.</p>
            </div>
            </div>
        </footer>

    </wrapper>


  )
}


