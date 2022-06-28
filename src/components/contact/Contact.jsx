import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {FaTelegramPlane} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0q2ttit', 'template_ne1tsww', form.current, 'scC7tZWlRw8DVPf9t')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Connect</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <h4>Email</h4>
            <MdOutlineMail className='contact__option-icon'/>
            <h5>augustaeshiowula@gmail.com</h5>
            <a href="mailto:augustaeshiowula@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <h4>Telegram</h4>
            <FaTelegramPlane className='contact__option-icon'/>
            <h5>+2349081398737</h5>
            <a href="hhtps://te.me/augusta.eshiowula" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <h4>WhatsApp</h4>
            <BsWhatsapp className='contact__option-icon'/>
            <h5>+2349081398737</h5>
            <a href="https://api.whatsapp.com/send?phone+2349081398737" target="_blank">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Enter your full name' required />
          <input type="email" name='email' placeholder='Enter email' required />
          <textarea name="message"  rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact