import React from 'react'
import './about.css'
import AUGUSTA from '../../assets/augusta.png'
import {FaAward} from 'react-icons/fa'
import {HiUserGroup} from 'react-icons/hi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={AUGUSTA} alt="About Image" />
          </div>
        </div>

          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>3+ Years Working</small>
              </article>
         
              <article className='about__card'>
                <HiUserGroup className='about__icon'/>
                <h5>Clients</h5>
                <small>150+ Locally</small>
              </article>

              <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>20+ Completed Projects</small>
              </article>
            </div>

            <p>
              I am a master in business management and administration, professional software engineer,
              writing consultant and a passionate speaker. Starting out as a young entrepreneur in the business world,
              i was able to build a successful business team with great leadership qualities and business strategies 
              in the network marketing industry. Through successful years of experience and growths, i founded an 
              Agro-Allied Ecommerce company with the mission of uplifting the agricultural sector in Africa. Solving
              problems and creating new technologies are my passions and purpose for living.
              Being a master of business isn't enough but paving ways of opportunities an impact makes a huge difference as 
              i am also a firm investor in assets. 
              
              Through series of failures and complicated situations in the course of 
              my career, i have been able to sucessfully balance work life and personal life. I am totally happy person, creatively spontaneous and 
              take utmost pleasure in adventures. Change is my prerequisite for living a fulfilling life, taking the chance to evolve
              at anytime...leading without bounds.
            </p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
    </section>
  )
}

export default About