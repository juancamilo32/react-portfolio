import React from 'react'

import './About.css'

import { motion } from 'framer-motion'
import { fadeIn } from '../../animations/variants.js'

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaUnity, FaGithub, FaGitlab, FaConfluence } from 'react-icons/fa'
import { SiCsharp } from 'react-icons/si'

const aboutData = [
    {
        title: 'skills',
        info: [
            {
                title: 'Web Development',
                icons: [<FaHtml5 />,
                <FaCss3 />,
                <FaJs />,
                <FaReact />,
                <FaFigma />]
            },
            {
                title: 'Game Development',
                icons: [<FaUnity />, <SiCsharp />],
            },
            {
                title: 'Version Control',
                icons: [<FaGithub />, <FaGitlab />],
            }
        ],
    },
    {
        title: 'experience',
        info: [
            {
                title: 'Node developer intern - A&A Soluciones',
                stage: '2022',
            },
            {
                title: 'Programming tutor - Industrial University of Santander',
                stage: '2020-2021',
            }
        ],
    },
    {
        title: 'education',
        info: [
            {
                title: 'Systems Engineer - Industrial University of Santander',
                stage: '2017 - 2022',
            }
        ],
    },
    {
        title: 'awards',
        info: [
            {
                title: 'cum laude distinction - Industrial University of Santander',
                stage: '2022',
            },
        ],
    },
];

const About = () => {

    const [index, setIndex] = React.useState(0);
    return (
        <div className='app-about'>
            <div className='app-about-container'>
                <div className='app-about-container-text'>
                    <motion.h2
                        className='app-about-container-text-title'
                        variants={fadeIn('right', 0.4)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                    >
                        Fueling <span className='red-color'>ideas</span> with the power of code.
                    </motion.h2>
                    <motion.p
                        className='app-about-container-text-content'
                        variants={fadeIn('right', 0.6)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                    >
                        I'm a Systems Engineer skilled in web and videogame development. Enthusiastic developer eager to learn and continue to grow within the software development industry.
                    </motion.p>
                </div>
                <motion.div
                    className='app-about-container-about'
                    variants={fadeIn('left', 0.6)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                >
                    <div className='app-about-container-about-items'>
                        {aboutData.map((item, itemIndex) => {
                            return (<div
                                key={itemIndex}
                                className={`${index === itemIndex ? "red-color select-animation" : ""} app-about-container-about-items-item`}
                                onClick={() => setIndex(itemIndex)}
                            >{item.title}</div>)
                        })}
                    </div>
                    <div className='app-about-container-about-content'>
                        {aboutData[index].info.map((item, itemIndex) => {
                            return (<div key={itemIndex} className='app-about-container-about-content-item'>
                                <div className='app-about-container-about-content-item-title'>{item.title}</div>
                                <div className={`${index === 0 ? "extra-pad-left" : ""} show-medium`}>-</div>
                                <div>{item.stage}</div>
                                <div className='app-about-container-about-content-icons'>
                                    {item.icons?.map((icon, iconIndex) => {
                                        return <div key={iconIndex} className='app-about-container-about-content-icons-icon'>{icon}</div>
                                    })}
                                </div>
                            </div>)
                        })}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About