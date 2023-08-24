import React from 'react'

import './Home.css'
import { Link } from 'react-router-dom'

import AnimatedLetters from '../../Components/AnimatedLetters/AnimatedLetters'
import { EarthCanvas } from '../../Components'
import { fadeIn } from '../../animations/variants'
import { motion } from 'framer-motion'

const Home = () => {
    const [letterClass, setLetterClass] = React.useState('text-animate');
    const nameArray = ['J', 'u', 'a', 'n'];
    const jobArray = ['W', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];

    React.useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        return;
    }, [])

    return (
        <div className='app-home'>
            <div className='app-home-text'>
                <h1 className='app-home-text-title'>
                    <span className={`${letterClass} _13`}>H</span>
                    <span className={`${letterClass} _14`}>i</span>
                    <span className={`${letterClass} _14`}>,</span>
                    <br />
                    <span className={`${letterClass} _15`}>I</span>
                    <span className={`${letterClass} _16`}>'</span>
                    <span className={`${letterClass} _16`}>m</span>
                    <span> </span>
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={17} />
                </h1>
                <motion.div
                    variants={fadeIn('up', 1)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'>
                    <h2 className='app-home-text-subtitle'>Frontend web developer | Videogame developer | Systems Engineer</h2>
                    <Link to='/contact' className='app-home-text-button'>CONTACT ME</Link>
                </motion.div>
            </div>
            <motion.div
                className='right'
                variants={fadeIn('left', 0.6)}
                initial='hidden'
                animate='show'
                exit='hidden'>
                <EarthCanvas />
            </motion.div>
        </div>
    )
}

export default Home