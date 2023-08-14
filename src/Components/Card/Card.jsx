import React from 'react'

import './Card.css'

import { motion } from 'framer-motion'
import { AiFillEye, AiFillGithub } from 'react-icons/ai';

const Card = ({ project }) => {
    return (
        <div className='app-card'>
            <div className='app-card-image'>
                <img src={project.image} alt='' />
                <motion.div
                    whileHover={{ opacity: [0, 1] }}
                    transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                    className='app-card-image-hover'
                >
                    <a href={project.projectLink} target='_blank' rel='noreferrer'>
                        <motion.div
                            whileInView={{ scale: [0, 1] }}
                            whileHover={{ scale: [1, 0.9] }}
                            transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                        >
                            <AiFillEye />
                        </motion.div>
                    </a>
                    <a href={project.codeLink} target='_blank' rel='noreferrer'>
                        <motion.div
                            whileInView={{ scale: [0, 1] }}
                            whileHover={{ scale: [1, 0.9] }}
                            transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                        >
                            <AiFillGithub />
                        </motion.div>
                    </a>
                </motion.div>
            </div>
            <div className='app-card-content'>
                <h4 className='app-card-content-title'>{project.title}</h4>
                <p className='app-card-content-description'>{project.description}</p>
                <div className='app-card-content-tag'>
                    <p>{project.tag}</p>
                </div>
            </div>
        </div>
    )
}

export default Card