import React from 'react';
import CTA from './CTA'
import Me from '../../assets/megan.png'
import HeaderSocials from './HeaderSocials';
import './header.css'

function Header(props) {
    return (
        <header>
            <div className="container header_container">
                <h5>Hello I'm</h5>
                <h1>Megan Moulos</h1>
                <h5 className='text-light'>Fullstack Developer | UI/UX</h5>
                <CTA />
                <div className="me">
                    <img src={Me} alt='Megan' />
                </div>
                <a href='#contact' className='scroll_down'>Scroll Down</a>
            </div>
        </header>
    );
}

export default Header;