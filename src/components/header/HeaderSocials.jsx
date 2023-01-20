import React from 'react';
import {BsLinkedin, BsHeartFill} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {TfiWrite} from 'react-icons/tfi'

function HeaderSocials(props) {
    return (
        <div className='header_socials'>
            <a href='https://www.linkedin.com/in/meganmoulos/' target='blank'><BsLinkedin /></a>
            <a href='https://github.com/meganmoulos' target='blank'><FaGithub /></a>
            <a href='https://dev.to/meganmoulos'><TfiWrite /></a>
            <a href='https://www.meganmoulos.com/' target='blank'><BsHeartFill /></a>
        </div>
    );
}

export default HeaderSocials;