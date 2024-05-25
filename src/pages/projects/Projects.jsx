import React, { useState } from 'react'
import { projects } from '../../data'
import ProjectItems from '../../components/ProjectItems'
import './projects.css'

const Projects = () => {

  return (
    <section className="project section">
      <h2 className="section__title">My <span>Projects</span></h2>
      <div className="project__container container grid">
        {projects.map((item) => {
          return <ProjectItems key={item.id} {...item}/>;
        })}
        And much more....
      </div>
    </section>
  )
}

export default Projects
