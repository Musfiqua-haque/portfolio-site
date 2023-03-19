import React from 'react'
import './contact.css'
import { useRef } from 'react'
import contact from '../images/contact.jpg'

export default function Contact() {
    const form = useRef();


    const sendEmail=()=>{

    }


  return (
    <div className='contact'>
        <div className="row">
            <div className="col-6">
                <div className="contact_box">
                    <div className="contact_meta">
                        <h1 className='hire-me-text text-white text-center mt-5 pt-5'>Hire Me.</h1>
                        <p className='hire-text text-white text-center'>
                            I am available for freelancing work, contact with me via phnone.
                        </p>
                        <p className='text-white text-center'>
                            <strong>+88 098 1256 </strong>or email <strong>admin@gmail.com</strong>
                        </p>
                    </div>
                    <div className="input-box mt-5">
                        <form ref={form} onSubmit={sendEmail}>
                        <input type="text" className='contact name ' placeholder='Your Name*' />
                        <input type="email" className='contact email' placeholder='Your Email*' />
                        <input type="text" className='contact text' placeholder='Write Your Subject*' />
                        <textarea type="text" className='contact textarea' placeholder='Write Your Text Here*' />
                        <button className='contact-btn'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="col-6">
                <img className='contact_img' src={contact} alt="" />
            </div>
        </div>
    </div>
  )
}
