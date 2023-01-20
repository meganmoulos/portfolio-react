import React from 'react';
import './footer.css'
import {AiFillInstagram} from 'react-icons/ai'
import {FaLinkedin} from 'react-icons/fa'
import {AiOutlineGithub} from 'react-icons/ai'

function Footer(props) {
    return (
        <footer>
            <a href="#" className='footer_logo'>Megan Moulos</a>
            <ul className='permalinks'>
                <li>
                    <a href="#">Top of Page</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
            </ul>
            <div className="footer_socials">
                <a href="https://github.com/meganmoulos" target='_blank'><AiOutlineGithub /></a>
                <a href="https://www.linkedin.com/in/meganmoulos/" target='_blank'><FaLinkedin /></a>
                <a href="https://www.instagram.com/meganmoulos/" target='_blank'><AiFillInstagram /></a>
                
            </div>
            
        </footer>
    );
}

export default Footer;