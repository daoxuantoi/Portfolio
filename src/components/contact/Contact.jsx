import React from 'react'
import './contact.css'
import{AiOutlineMail} from 'react-icons/ai'
import{FaWhatsappSquare} from 'react-icons/fa'
import {AiFillMessage} from 'react-icons/ai'
const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail className="contact_option-icon"/>
            <h4>Email</h4>
            <h5>xuantoihanu@gmail.com</h5>
            <a target = "_blank"href="mailto:xuantoihanu@gmail.com">Send a message xuan toi</a>
          </article>
          <article className="contact_option">
            <AiFillMessage className="contact_option-icon"/>
            <h4>Message</h4>
            <h5>Xuan Toi</h5>
            <a target = "_blank"href="https://www.messenger.com/">Send a message xuan toi</a>
          </article>
          <article className="contact_option">
            <FaWhatsappSquare className="contact_option-icon"/>
            <h4>WhatsApp</h4>
            <h5>0379100518</h5>
            <a target = "_blank"href="https://web.whatsapp.com/">Send a message xuan toi</a>
          </article>
        </div>

        <form action="">
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

      </div>
      <a id = "scroll-top"href="#">Scroll Top</a>
    </section>
  )
}

export default Contact
