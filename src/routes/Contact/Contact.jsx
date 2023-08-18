import React from 'react'
import emailjs from '@emailjs/browser';

import './Contact.css'

import { BsArrowRight } from 'react-icons/bs';

import { motion } from 'framer-motion';
import { fadeIn } from '../../animations/variants';


const Contact = () => {

    const form = React.useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ji9fevs', 'template_x2jio0b', form.current, '_1sO8GRAK1WKu5fVx')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    function refreshPage() {
        setTimeout(() => {
            window.location.reload(true);
        }, 2000);
    }

    return (
        <div className='app-contact'>
            <div className='app-contact-container'>
                <div className='app-contact-container-content'>
                    <motion.h2
                        className='app-contact-title'
                        variants={fadeIn('up', 0.2)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                    >Let's make your <span className='red-color'>ideas</span> a reality</motion.h2>
                    <motion.form
                        ref={form}
                        onSubmit={sendEmail}
                        className='app-contact-form'
                        variants={fadeIn('up', 0.4)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                    >
                        <div className='app-contact-form-inputs'>
                            <input type='text' placeholder='Name' name='name' className='app-contact-form-input' />
                            <input type='text' placeholder='Email' name='email' className='app-contact-form-input' />
                        </div>
                        <input type='text' placeholder='Subject' name='subject' className='app-contact-form-input' />
                        <textarea placeholder='Message' name='message' className='app-contact-form-textarea'></textarea>
                        <button className='app-contact-form-button' type="submit" value="Send" onClick={refreshPage}>
                            <span className='app-contact-form-button-text'>Let's talk</span>
                            <BsArrowRight className='app-contact-form-button-icon' />
                        </button>
                    </motion.form>
                </div>
            </div>
        </div>
    )
}

export default Contact