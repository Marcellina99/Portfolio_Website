import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
      <article className="service">
          <div className="service__head">
            <h3>Full-Stack Software Engineering</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Product Development and Implementation.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>API Documentations</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Software Testing and Integration.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Technical Communication.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Database Design and Implementation.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Website Design and Re-design.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>E-commerce Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Landing Page and Scripting.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Custom Websites Applications.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Web Development Consultation </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Writing/Blogging</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Memoirs</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Blogs/White Papers</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Software Product Analysis/ Technical Content.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Proofreading and Editing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Research Articles/Paper Works.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services