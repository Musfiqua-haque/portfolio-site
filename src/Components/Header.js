import React from 'react'
// import Typed from 'react-typed'

export default function Header() {
  return (
    <div className='header-wraper'>
        <div className='main-info'>
            <h1>I am a Web developer</h1>
            {/* <Typed className='typed-text'
            strings={["react developer, App developer, facebook ads"]}
            /> */}
            <a href="#" className='contact-button'>Contact</a>
        </div>
    </div>
  )
}
