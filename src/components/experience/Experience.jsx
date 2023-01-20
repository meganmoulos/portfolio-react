import React from 'react';
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

function Experience(props) {
    return (
        <section id='experience'>
            <h5>My Skills</h5>
            <h2>Experience</h2>
            <div className='container experience_container'>
                <div className="experience_frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_details-icon'/>
                            <div>
                                <h4>HTML</h4>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_details-icon'/>
                            <h4>CSS</h4>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_details-icon'/>
                            <h4>JavaScript</h4>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_details-icon'/>
                            <h4>React</h4>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_details-icon' />
                            <h4>Figma</h4>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_details-icon' />
                            <h4>Bootstrap</h4>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_details-icon' />
                            <h4>Material UI</h4>
                        </article>
                    </div>
                </div>
                <div className="experience_backend">
                <h3>Backend Development</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_details-icon'/>
                            <h4>Ruby</h4>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_details-icon'/>
                            <h4>Rails</h4>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_details-icon'/>
                            <h4>SQL</h4>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_details-icon'/>
                            <h4>Active Record</h4>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;