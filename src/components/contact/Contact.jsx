import React from 'react';
import './contact.css'
import {FiMail} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'

function Contact(props) {
    return (
        <section id='contact'>
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact_container">
                <div className="contact_options">
                    <article className='contact_option'>
                        <FiMail className='contact_option-icon' />
                        <h4>Email</h4>
                        <h5>meganmoulos@gmail.com</h5>
                        <a href="mailto:meganmoulos@gmail.com" target='_blank'>Send a message</a>
                    </article>
                    <article className='contact_option'>
                        <FiInstagram className='contact_option-icon'/>
                        <h4>Instagram</h4>
                        <h5>meganmoulos</h5>
                        <a href="https://www.instagram.com/meganmoulos/" target='_blank'>Visit my feed</a>
                    </article>
                </div>
                <form action="">
                    <input type="text" name='name' placeholder='Your name' required />
                    <input type="email" name='email' placeholder ='Your email' required/>
                    <textarea name='message' rows='7' placeholder='Message' required />
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;