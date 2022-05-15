import React from 'react'
import {IoLogoLinkedin} from 'react-icons/io'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillDribbbleCircle} from 'react-icons/ai'
const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://linkedin.com" target="_blank"><IoLogoLinkedin/></a>
      <a href="https://github.com" target="_blank"><AiFillGithub/></a>
      <a href="https://dribble.com" target="_blank"><AiFillDribbbleCircle/></a>
    </div>
  )
}

export default HeaderSocials
