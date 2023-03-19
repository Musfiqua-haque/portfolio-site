import React from 'react'
import './about.css'
import myself from '../images/myself.jpg'
import resume from '../images/hello.pdf'

export default function About() {
  return (
    <div className='a d-flex'>
       <div className="a-left col-12 col-lg-6 mt-5">
        <div className="a-card bg"></div>
            <div className="a-card">
                <img className='a-img' src={myself} alt="" />
            </div>
       </div>
       <div className="a-right col-lg-6 col-12">
            <h1 className="a-title text-center mt-5">About Me</h1>
            <p className="sub mt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
            <p className="a-desc mb-5">Lorem Ipsum has been the industry's standard dummy and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
            essentially unchanged. 
            </p>
            <a className='contact-button' href={resume} download='resume'>Download CV</a>
       </div>
    </div>
  )
}
