import React from 'react';
import './portfolio.css'
import BookwormHome from '../../assets/bookworm_home.png'

function Portfolio(props) {
    return (
        <section id='portfolio'>
            <h5>Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio_container">
                <article className='portfolio_item'>
                    <div className='portfolio_item-image'>
                        <img src={BookwormHome} alt="bookworm" />
                    </div>
                    <h3>Bookworm</h3>
                    <div className='portfolio_item-cta'>
                        <a href="https://github.com/meganmoulos/bookworm_capstone" className='btn'>Github</a>
                        <a href="" className='btn btn-primary' target='_blank'>Demo</a>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Portfolio;