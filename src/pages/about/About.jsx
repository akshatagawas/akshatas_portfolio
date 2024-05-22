import React from 'react'
import { FaDownload } from 'react-icons/fa'
import CV from "../../assets/akshata-CV.pdf"
import "./about.css"
import { resume } from '../../data'
import ResumeItem from '../../components/ResumeItem'
import Skills from '../../components/Skills'

const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className='section__title'>
          About <span>Me</span>
        </h2>
        <div className="about__container grid">
          <div className="about__info">
            <h3 className="section__subtitle subtitle__center">Introduction</h3>
            <p className='home__description'>Hello! I'm Akshata Gawas, and I have a passion for using computer technology to tackle real-world problems. 
              Currently, I'm pursuing a Computer Science degree at Indiana University Bloomington.
              However, my journey extends beyond the classroom. I've had the privilege of gaining valuable experience through various roles. 
              At Tech For Good Inc., I had the opportunity to lead a team in deploying computer programs effectively on the internet using Kubernetes. 
              Our efforts resulted in significant improvements in speed and cost efficiency.During my time at Virtusa Private Ltd., 
              I contributed to the development of a user-friendly website for booking air conditioner servicing appointments. 
              Our focus on design and usability led to positive feedback from users. In addition to my tech interests, 
              I find solace in creative pursuits like drawing mandalas, allowing me to express my artistic side and maintain balance in a tech-driven world. 
              I'm also an active enthusiast, enjoying badminton, hiking, and reading, which provide me with balance and inspiration. 
              I'm enthusiastic about connecting with professionals and exploring opportunities to contribute to innovative projects. 
              Let's connect and discuss how we can work together to make a meaningful impact!</p>


            <a href={CV} download='' className='button'>Download Resume
              <span className="button__icon">
                <FaDownload/>
              </span>
            </a>
          </div>

        </div>
      </section>

      <div className="separator"></div>

      <section className='skills'> 
      <h3 className="section__subtitle subtitle__center">My Skills</h3>
      <div className="skills__container grid">
        <Skills/>
      </div>
      </section>
      
      <div className="separator"></div>

      <section className="resume">
        <h3 className="section__subtitle subtitle__center">Education and Experience</h3>
        <div className="resume__container grid">
          <div className="resume__data">
            {resume.map((val) => {
              if (val.category == 'education'){
                return <ResumeItem key={val.id} {...val}/>
              }
            })}
          </div>

          <div className="resume__data">
            {resume.map((val) => {
              if (val.category == 'experience'){
                return <ResumeItem key={val.id} {...val}/>
              }
            })}
          </div>
        </div>
      </section>

    </main>
  )
}

export default About
