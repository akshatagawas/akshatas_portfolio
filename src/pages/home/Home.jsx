import React from 'react'
import Profile from '../../assets/home.jpg'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import './home.css'


const Home = () => {
  return (
    <section className='home section grid'>
        <img src={Profile} alt='' className='home__img'></img>
        <div className='home__content'>
            <div className='home__data'>
                <h1 className='home__title'>
                    <span>I'm Akshata Gawas.</span>  Software Developer
                </h1>
                <p className="home__description">
                Full-stack developer with a passion for building innovative solutions. Skilled in ReactJS, Spring Boot, and various cloud platforms (AWS, GCP). Experience in both frontend and backend development.
                </p>
                <Link to='/about' className='button'>
                    More About Me{' '}
                    <span className='button__icon'>
                        <FaArrowRight/>
                    </span>
                </Link>
            </div>

        </div>
        <div className="color__block">
            
        </div>
    </section>
  )
}

export default Home
