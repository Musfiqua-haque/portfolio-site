import React from 'react'
import myself from '../images/myself.jpg'

export default function About() {
  return (
    <div className='about'>
       <div className="about-left">
        <div className="about-card bg">
            <div className="about-card">
                <img src={myself} alt="" />
            </div>
        </div>
       </div>
       <div className="about-right"></div>
    </div>
  )
}
