import React from 'react'
import './contact.css'

export default function Contact() {
  return (
    <div className='contact component_space'>
        <div className="row">
            <div className="col_2">
                <div className="contact_box">
                    <div className="contact_meta">
                        <h1 className='hire-me-text'>Hire Me.</h1>
                        <p className='hire-text'>
                            I am available for freelancing work, contact with me via phnone.
                        </p>
                        <p>
                            <strong>+88 098 1256</strong>or email <strong>admin@gmail.com</strong>
                        </p>
                    </div>
                    <div className="input-box">
                        <input type="text" className='contact name' placeholder='Your Name*' />
                        <input type="email" className='contact email' placeholder='Your Email*' />
                        <input type="text" className='contact text' placeholder='Write Your Subject*' />
                        <textarea type="text" className='contact textarea' placeholder='Write Your Text Here*' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>

            <div className="col_2">
                <img src='' alt="" />
            </div>
        </div>
    </div>
  )
}
