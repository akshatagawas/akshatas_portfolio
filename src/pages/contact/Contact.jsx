import React from 'react'

import { FaEnvelopeOpen, FaLinkedin , FaGithub , FaYoutube } from 'react-icons/fa'
import { SiLeetcode } from "react-icons/si";
import { FiSend } from 'react-icons/fi'
import './contact.css'

const Contact = () => {
  return (
    <section className="section contact">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>
      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy !</h3>
          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing new ideas, opprtunities and projects to be part of your vision.
          </p>
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className='info__icon'/>
              <div>
                <span className='info__title'>Mail me</span>
                <h4 className="info__desc">agawas@iu.edu</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
          <a href='https://www.linkedin.com/in/akshata-gawas-943b021a1/' className='contact__social-link'>
              <FaLinkedin/>
            </a>

            <a href='https://github.com/akshatagawas' className='contact__social-link'>
              <FaGithub />
            </a>

            <a href='https://leetcode.com/u/akshatagawas5679/' className='contact__social-link'>
              <SiLeetcode />
            </a>

            <a href='https://www.youtube.com/channel/UC4rx4soJY99DAQsX7QjbfPw' className='contact__social-link'>
              <FaYoutube/>
            </a>

            



          </div>
        </div>

        <form className="contact__form">
          <div className="form__input-group">

            <div className="form__input-div">
              <input type='text' placeholder='Your Name' className='form__control'></input>
            </div>

            <div className="form__input-div">
              <input type='email' placeholder='Your Email' className='form__control'/> 
            </div>

            <div className="form__input-div">
              <input type='text' placeholder='Your Subject' className='form__control'/>
            </div>

          </div>

          <div className="form__input-div">
            <textarea placeholder='Your Message' className='form__control textarea'></textarea>
          </div>

          <button className='button'>
            Send Message
            <span className='button__icon contact__button-icon'>
              <FiSend/>
            </span>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
