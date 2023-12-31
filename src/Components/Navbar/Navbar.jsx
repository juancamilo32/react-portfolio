import React from 'react'

import { Link, useLocation } from 'react-router-dom'
import { HiHome, HiUser, HiViewColumns, HiEnvelope } from "react-icons/hi2";

import './Navbar.css'

const links = [
    { name: 'home', path: '/', icon: <HiHome /> },
    { name: 'about', path: '/about', icon: <HiUser /> },
    { name: 'projects', path: '/projects', icon: <HiViewColumns /> },
    { name: 'contact', path: '/contact', icon: <HiEnvelope />, }
];

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className='app-navbar'>
            <div className='app-navbar-items'>
                {links.map((link, index) => {
                    return <Link to={link.path} key={index} onClick={''} className='link'>
                        <div className='app-navbar-items-tooltip'>
                            <div className='app-navbar-items-tooltip-rectangle'>
                                <div className='app-navbar-items-tooltip-text'>{link.name}</div>
                                <div className='app-navbar-items-tooltip-triangle'></div>
                            </div>
                        </div>
                        <div className={`${link.path === location.pathname ? "red-color" : "white-color"} red-hover`}>{link.icon}</div>
                    </Link>
                })}
            </div>
        </nav>
    )
}

export default Navbar