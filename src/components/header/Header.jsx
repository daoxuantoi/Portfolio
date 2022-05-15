import React from 'react'
import CTA from './CTA'
import ME from '../../assets/me.png'
import './header.css'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Xuan Toi</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <a href="#contact" className="scroll_down">Scroll Down</a>

        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me"/>
        </div>

      </div>
      
    </header>
  )
}

export default Header
