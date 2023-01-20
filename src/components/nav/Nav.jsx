import React from 'react';
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import {BsBook} from 'react-icons/bs'
import {BiBrain} from 'react-icons/bi'
import {AiOutlineMessage} from 'react-icons/ai'
import './nav.css'
import {useState} from 'react'

function Nav(props) {
    const [activeNav, setActiveNav] = useState('#')
    
    return (
        <nav>
            <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
            <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineInfoCircle /></a>
            <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBrain /></a>
            <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BsBook /></a>
            <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMessage /></a>
        </nav>
    );
}

export default Nav;