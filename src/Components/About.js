import React from 'react'
import './about.css'
import myself from '../images/myself.jpg'
import resume from '../images/hello.pdf'

export default function About() {
  return (
    <div className='a d-flex'>
       <div className="a-left col-lg-6 mt-3">
        <div className="a-card bg"></div>
            <div className="a-card">
                <img className='a-img' src={myself} alt="" />
            </div>
       </div>
       <div className="a-right col-lg-6">
        <h1 className="a-title text-center mt-5">About Me</h1>
        <p className="sub mt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
        <p className="a-desc mb-5">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        </p>
        <a className='contact-button' href={resume} download='resume'>Download CV</a>
       </div>
    </div>
  )
}
