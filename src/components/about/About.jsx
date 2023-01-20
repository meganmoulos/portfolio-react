import React from 'react';
import './about.css'
import Me from '../../assets/about_me_pic.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {MdAttachMoney} from 'react-icons/md'

function About(props) {
    return (
        <section id='about'>
            <h5>Who Am I?</h5>
            <h2>About Me</h2>
            <div className='container about_container'>
                <div className="about_me">
                    <div className="about_me_image">
                        <img src={Me} alt="megan" />
                    </div>
                </div>
                <div className="about_content">
                    <div className="about_cards">
                        <article className='about_card'>
                            <FaAward className='about_icon'/>
                            <h5>Experience</h5>
                            <small>10+ Years</small>
                        </article>
                        <article className='about_card'>
                            <FiUsers className='about_icon'/>
                            <h5>Customers</h5>
                            <small>2000+ on Etsy</small>
                        </article>
                        <article className='about_card'>
                            <MdAttachMoney className='about_icon'/>
                            <h5>Products</h5>
                            <small>2000+ Sold</small>
                        </article>
                    </div>
                    <p>
                        Software Engineer and UX/UI developer with experience in Ruby on Rails and JavaScript based programming. More than  10+ years of professional experience in graphic design, UI design and UX research. Thrive in a project management and design environment, helping companies create visually attractive and engaging web experiences. Embrace challenges to create creative and innovate software solutions focused on mastery of design principals.
                    </p>
                    <a href='#contact' className='btn btn-primary'>Let's Work Together</a>
                </div>
            </div>
        </section>
    );
}

export default About;