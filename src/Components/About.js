import React from 'react'
import './about.css'
import myself from '../images/myself.jpg'
import resume from '../images/hello.pdf'

export default function About() {
  return (
    <div className='about row'>
       <div className="about-left mt-5 col-sm-12 col-md-12 col-lg-6">
        <div className="about-card bg"></div>
            <div className="about-card">
                <img className='a-img' src={myself} alt="" />
            </div>
       </div>
       <div className="about-right col-sm-12 col-md-12 col-lg-6">
            <h1 className="a-title text-center mt-5">About Me</h1>
            <p className="sub mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text.Lorem Ipsum has been the industry's standard dummy text. </p>
            <p className="a-desc mb-5">Lorem Ipsum has been the industry's standard dummy and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
            essentially unchanged. 
            </p>
            <a className='contact-button' href={resume} download='resume'>Download CV</a>
       </div>
    </div>
  )
}
