import React, { useState } from 'react'
import Close from "../assets/close.svg"

const ProjectItems = ({ img, title, details}) => {
  const [modal, setModal] = useState(false)
  const toggleModal = () => {
    setModal(!modal)
  }
  return (
    <div className="project__item">
        <img src={img} alt='' className='project__img'></img>

        <div className="project__hover" onClick={toggleModal}>
            <h3 className="project__title">{title}</h3>
        </div>

        {modal && (
            <div className="project__modal">
            <div className="project__modal-content">
                <img src={Close} alt='' className='modal__close' onClick={toggleModal}></img>

                <h3 className="modal__title">{title}</h3>

                <ul className='modal__list grid'>
                    {details.map(({icon, title, desc}, index) => {
                        return(
                            <li className='modal__item' key={index}>
                                <span className='item__icon'>{icon}</span>

                                <div className="item__title">
                                    <span className="item__details">{desc}</span>
                                </div>

                            </li>
                        )
                    })}
                </ul>

                <img src={img} alt='' className='modal__img'></img>
            </div>
        </div>
        )}
    </div>
  )
}

export default ProjectItems
