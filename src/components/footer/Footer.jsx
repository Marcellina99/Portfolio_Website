import React from 'react'
import './footer.css'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="/#App" className='footer__logo'>Portfolio</a>
      <ul className='permalinks'>
        <li><a href="/#App">Home</a></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/#experience">Experience</a></li>
        <li><a href="/#services">Services</a></li>
        <li><a href="/#portfolio">Portfolio</a></li>
        <li><a href="/#testionials">Testimonials</a></li>
        <li><a href="/#contact">contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="http://Twitter.com"><AiOutlineTwitter/></a>
        <a href="http://Instagram.com"><BsInstagram/></a>
        <a href="http://linkedin.com"> <BsLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copyright; JINDU Product Designs. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer