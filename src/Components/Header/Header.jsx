import React from 'react'

import './Header.css'
import { logo } from '../../assets'

import { RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='app-header'>
            <div className='app-header-container'>
                <img src={logo} />
                <div className='app-header-container-socials'>
                    <Link to={'https://github.com/juancamilo32'} className='link'><RiGithubFill className='red-hover' fontSize={24} /></Link>
                    <Link to={'https://www.linkedin.com/in/juan-camilo-londoño/'} className='link'><RiLinkedinBoxFill className='red-hover' fontSize={24} /></Link>
                </div>
            </div>
        </div>
    )
}

export default Header