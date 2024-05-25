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
              I'm recent graduate from Indiana University Bloomington with Masters degree in Computer Science.
              However, my journey extends beyond the classroom. Full-stack enthusiast by day, LeetCode warrior by night!  I'm obsessed with building awesome things (React, Spring Boot, you name it!), and always hungry to learn new tech (AI/ML, LLMs!). From databases (MySQL, PostgreSQL) to cloud (AWS, GCP).
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
