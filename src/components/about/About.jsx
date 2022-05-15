import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {AiFillFolderOpen} from 'react-icons/ai'
import{BiUserCircle} from 'react-icons/bi'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>   
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="aboutme"/>
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon"/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about_card">
              <BiUserCircle className="about_icon"/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about_card">
              <AiFillFolderOpen className="about_icon"/>
              <h5>Project</h5>
              <small>80+ completed</small>
            </article>
          </div>
          <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio amet voluptatem quaerat eveniet natus ut ullam earum itaque. Perferendis in aliquam corporis provident sapiente magni aliquid deserunt repudiandae tenetur minima!
        </p>
        <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
       
      </div>

    </section>
  )
}

export default About
