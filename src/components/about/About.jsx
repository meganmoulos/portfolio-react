import React from 'react';
import './about.css'
import Me from '../../assets/me_about.jpg'
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
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet ab deserunt reprehenderit perferendis? Voluptatibus eaque unde repudiandae dolor quos itaque eveniet quod. Dolores ipsa natus distinctio repellat nobis numquam incidunt.
                    </p>
                    <a href='#contact' className='btn btn-primary'>Let's Work Together</a>
                </div>
            </div>
        </section>
    );
}

export default About;