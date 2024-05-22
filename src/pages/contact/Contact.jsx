import React from 'react'

import { FaEnvelopeOpen, FaLinkedin , FaGithub , FaYoutube } from 'react-icons/fa'
import { SiLeetcode } from "react-icons/si";
import { FiSend } from 'react-icons/fi'
import './contact.css'
import { useState, useEffect } from 'react';


const Contact = () => {

  const [status, setStatus] = useState('');

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        form.reset();
        setStatus('SUCCESS');
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      setStatus('ERROR');
    }
  };





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

        <form className="contact__form" action='https://formspree.io/f/xwkgjoza' method='POST' onSubmit={handleSubmit}>
          <div className="form__input-group">

            <div className="form__input-div">
              <input type='text' placeholder='Your Name' className='form__control' required></input>
            </div>

            <div className="form__input-div">
              <input type='email' placeholder='Your Email' className='form__control' required/> 
            </div>

            <div className="form__input-div">
              <input type='text' placeholder='Your Subject' className='form__control' required/>
            </div>

          </div>

          <div className="form__input-div">
            <textarea placeholder='Your Message' className='form__control textarea' required></textarea>
          </div>

          <button className='button' type='submit'>
            Send Message
            <span className='button__icon contact__button-icon'>
              <FiSend/>
            </span>
            {status === 'SUCCESS' && <p className="form-success">Thanks! Your message has been sent.</p>}
          {status === 'ERROR' && <p className="form-error">Oops! There was an error sending your message.</p>}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
