import React from 'react'
import emailjs from '@emailjs/browser';

import './Contact.css'

import { BsArrowRight } from 'react-icons/bs';

import { AnimatePresence, motion } from 'framer-motion';
import { fadeIn } from '../../animations/variants';


const Contact = () => {

    const form = React.useRef();

    const [popUpMessage, setPopUpMessage] = React.useState("Message sent.");
    const [showMessage, setShowMessage] = React.useState(false);

    const [name, setName] = React.useState('');
    const [subject, setSubject] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');

    function validateForm() {

        var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (name.length == 0) {
            setPopUpMessage("Please enter your name.");
            return false
        }

        if (!email.match(emailRegex)) {
            setPopUpMessage("Please enter a valid email.")
            return false
        }

        if (subject.length == 0) {
            setPopUpMessage("Please enter a subject.");
            return false
        }

        if (message.length == 0) {
            setPopUpMessage("Please enter a message.");
            return false
        }

        setPopUpMessage("Message sent.");
        return true
    }

    const sendEmail = (e) => {
        e.preventDefault();
        if (!showMessage) {
            let valid = validateForm();
            setShowMessage(true);
            if (valid) {
                emailjs.sendForm('service_ji9fevs', 'template_x2jio0b', form.current, '_1sO8GRAK1WKu5fVx')
                    .then((result) => {
                        console.log(result.text);
                    }, (error) => {
                        console.log(error.text);
                    });
                setName("");
                setEmail("");
                setSubject("");
                setMessage("");
            }
            setTimeout(() => {
                setShowMessage(false);
            }, 3000);
        }
    };

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
                            <input type='text' placeholder='Name' name='name' className='app-contact-form-input' onChange={(e) => setName(e.target.value)} value={name} />
                            <input type='text' placeholder='Email' name='email' className='app-contact-form-input' onChange={(e) => setEmail(e.target.value)} value={email} />
                        </div>
                        <input type='text' placeholder='Subject' name='subject' className='app-contact-form-input' onChange={(e) => setSubject(e.target.value)} value={subject} />
                        <textarea placeholder='Message' name='message' className='app-contact-form-textarea' onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
                        <button className='app-contact-form-button' type="submit" value="Send">
                            <span className='app-contact-form-button-text'>Let's talk</span>
                            <BsArrowRight className='app-contact-form-button-icon' />
                        </button>
                    </motion.form>
                    <AnimatePresence>
                        {showMessage ?
                            <motion.div
                                className='popup'
                                variants={fadeIn('up', 0.1)}
                                initial='hidden'
                                animate='show'
                                exit='hidden'
                            >
                                <span>{popUpMessage}</span>
                            </motion.div>
                            :
                            null}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

export default Contact