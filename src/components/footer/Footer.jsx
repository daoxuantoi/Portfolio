import React from 'react'
import './footer.css'
import{AiFillFacebook} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">XUAN TOI</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href=""><AiFillFacebook/></a>
        <a href=""><AiFillTwitterCircle/></a>
        <a href=""><AiFillInstagram/></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Xuan Toi 2022</small>
      </div>
    </footer>
  )
}

export default Footer
