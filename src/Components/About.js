import React from 'react'
import myself from '../images/myself.jpg'

export default function About() {
  return (
    <div className='a'>
       <div className="a-left col-lg-6 col-sm-12">
        <div className="a-card bg">
            <div className="a-card">
                <img src={myself} alt="" />
            </div>
        </div>
       </div>
       <div className="a-right col-lg-6 col-sm-12">
        <h1 className="a-title">About Me</h1>
        <p className="sub">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
        <p className="a-desc">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing</p>
        <button className='contact-button mt-3'>Download CV</button>
       </div>
    </div>
  )
}
