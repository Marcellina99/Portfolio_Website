import React from 'react'
import './nav.css'
import {BiHomeHeart} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {MdOutlineMessage} from 'react-icons/md'
import {useState} from 'react'

const Nav = () => {
  const[activeNav, setActive] = useState('#')
  return (
    <nav>
      <a href="/#" onClick = {() => setActive('#')} className={activeNav === '#' ? 'active' : ''}><BiHomeHeart/></a>
      <a href="/#about" onClick = {() => setActive('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="/#experience" onClick = {() => setActive('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href="/#services" onClick = {() => setActive('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="/#contact" onClick = {() => setActive('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdOutlineMessage/></a>
    </nav>
  )
}

export default Nav