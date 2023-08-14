import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

import './Projects.css'
import { Card } from '../../Components'

import { mawang, grover, chogos, gorilla, ninja, galaxy } from '../../assets'

import { motion } from 'framer-motion';
import { fadeIn } from '../../animations/variants';

const projectsData = [
    {
        title: "E-commerce Website",
        description: "Chogo's is a web clothing e-commerce built with React.",
        tag: "Web App",
        image: chogos,
        projectLink: "https://chogos.netlify.app",
        codeLink: "https://github.com/juancamilo32/react-ecommerce-app"
    },
    {
        title: "Restaurant Website",
        description: "Mawang is a web landing page for a restaurant, built with React.",
        tag: "Web App",
        image: mawang,
        projectLink: "https://mawang.netlify.app",
        codeLink: "https://github.com/juancamilo32/react-restaurant-app"
    },
    {
        title: "Food Delivery Website",
        description: "Grover is a web landing page for a food delivery service, built with React.",
        tag: "Web App",
        image: grover,
        projectLink: "https://grover-delivery.netlify.app",
        codeLink: "https://github.com/juancamilo32/react-food-delivery"
    },
    {
        title: "Gorilla Annihilation",
        description: "Roguelike videogame inspired by The Binding of Isaac. Developed in Unity.",
        tag: "Videogame",
        image: gorilla,
        projectLink: "https://juanlondono.itch.io/gorilla-annihilation",
        codeLink: "https://github.com/juancamilo32/gorilla-annihilation"
    },
    {
        title: "Ninja Jump",
        description: "Ninja themed endless runner videogame. Developed in Unity.",
        tag: "Videogame",
        image: ninja,
        projectLink: "https://juanlondono.itch.io/ninja-jump",
        codeLink: "https://github.com/juancamilo32/Ninja-Jump"
    },
    {
        title: "Space Shooter",
        description: "2D top-down shooter videogame. Developed in Unity",
        tag: "Videogame",
        image: galaxy,
        projectLink: "https://juanlondono.itch.io/space-shooter",
        codeLink: "https://github.com/juancamilo32/Space-Shooter"
    }
];

const Projects = () => {
    return (
        <div className='app-projects'>
            <motion.div
                variants={fadeIn('down', 0.4)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='app-projects-title'>
                <h2>A portfolio of <span className='red-color'>solutions</span>, a gallery of possibilities</h2>
            </motion.div>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    2000: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                modules={[Pagination, Navigation]}
                className='app-projects-swiper'
            >
                {projectsData.map((project, index) => {
                    return <SwiperSlide>
                        <motion.div
                            variants={fadeIn('up', 0.4)}
                            initial='hidden'
                            animate='show'
                            exit='hidden'>
                            <Card project={project} key={index} />
                        </motion.div>
                    </SwiperSlide>
                })}
            </Swiper>
        </div>
    )
}

export default Projects