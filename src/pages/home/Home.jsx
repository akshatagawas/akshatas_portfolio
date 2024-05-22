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
                    Hello! I am Akshata Gawas, and I have a passion for using computer technology to tackle real-world problems. 
                    Currently, I am pursuing a Computer Science degree at Indiana University Bloomington. 
                    I am enthusiastic about connecting with professionals and exploring opportunities to contribute to innovative projects. 
                    Let us connect and discuss how we can work together to make a meaningful impact!
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
