import React from 'react'
import { skills } from '../data'

const Skills = () => {
  return (
    <>
        {skills.map(({title, icon}, index) => {
            return(
                <div className='skills_box' key={index}>
                    <div className="skills__icon">
                        {icon}
                    </div>
                    <h3 className='skills__title'>{title}</h3>
                </div>
            )
        })}
    </>
  )
}

export default Skills
