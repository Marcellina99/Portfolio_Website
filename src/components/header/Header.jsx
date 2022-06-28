import React from 'react'
import './header.css'
import CTA from './CTA'
import AUGUSTA from '../../assets/augusta.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className="container header__conta">
            <h5>Hello there, I am</h5>
            <h1>Augusta Eshiowula</h1>
            <h5 className='text-light'>Fullstack Engineer</h5>
            <CTA />
            <HeaderSocials/>

            <div className="mainpic">
                <img src={AUGUSTA} alt ="augusta" />
            </div>

            <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>

    </header>
  )
}

export default Header