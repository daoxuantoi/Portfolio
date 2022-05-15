import React from 'react'
import {useState} from 'react'
import './nav.css';
import {AiFillHome} from 'react-icons/ai'
import {AiOutlineUserAdd} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {IoMdContact} from 'react-icons/io'

const Nav =() => {
    const [activeNav, setActiveNav] = useState('#')


    return (<nav>
        <a className = {activeNav === '#' ? 'active' : ''} onClick = {()=> setActiveNav('#')}href="#"><AiFillHome/></a>
        <a href="#about"  className = {activeNav === '#about' ? 'active' : ''} onClick = {()=> setActiveNav('#about')}><AiOutlineUserAdd/></a>
        <a href="#experience"  className = {activeNav === '#experience' ? 'active' : ''} onClick = {()=> setActiveNav('#experience')}><BiBook/></a>
        <a href="#services"  className = {activeNav === '#service' ? 'active' : ''} onClick = {()=> setActiveNav('#service')}><RiServiceLine/></a>
        <a href="#contact"  className = {activeNav === '#contact' ? 'active' : ''} onClick = {()=> setActiveNav('#contact')}><IoMdContact/></a>
    </nav>)
}
export default Nav;