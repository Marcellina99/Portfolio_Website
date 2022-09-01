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
            <img src={AUGUSTA} alt="profile" />
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
                <small>10+ Locally</small>
              </article>

              <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>7+ Completed Projects</small>
              </article>
            </div>

            <p>
              I am a professional software engineer with three years of
              experience in web/software development, software engineering services like, 
              Website Designs, APIs and Database Development, Java Development Services with Spring Framework.
              A qualified agile leader with excellent collaborative skills.

                <br/> <br/> 

              I have been able to gain experience in business management and administration, as a qualified writing consultant, and also passionate speaker.
              Starting out as a young entrepreneur in the business world,
              I was able to build a successful business team with great leadership qualities and business strategies 
              in the network marketing industry. <br/><br/> Through successful years of experience and growth, I founded an 
              Agro-Allied Ecommerce company with the mission of uplifting the agricultural sector in Africa. Solving
              problems and creating new technologies are my passions and purpose for living. I am also a firm investor in assets.
              Being a master of business isn't enough but paving ways for opportunities through innovative impact makes a huge difference.
              
              <br/> <br/>

              Through series of failures and complicated situations in the course of 
              my career, I have been able to sucessfully balance work life and personal life. I am totally happy person, creatively spontaneous and 
              take utmost pleasure in adventures. Constant positive change and adaptability is my prerequisite for living a fulfilling life, taking 
              the chance to evolve at anytime. Leading without bounds.
            </p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
    </section>
  )
}

export default About