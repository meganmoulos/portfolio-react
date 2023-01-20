import React from 'react';
import Resume from '../../assets/Megan_Moulos_resume.pdf'

function CTA(props) {
    return (
        <div className='cta'>
            <a href={Resume} download className='btn'>Download Resume</a>
            <a href='#contact' className='btn btn-primary'>Contact me</a>
        </div>
    );
}

export default CTA;