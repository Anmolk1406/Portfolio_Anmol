import React from 'react';
import './experience.css';
import titleDarkMode from '../Assets/title_darkMode.png';
import Company from './Company';
import famPay from '../Assets/fampay.png';
import timeLine from '../Assets/timeline.png';
import ekaCare from '../Assets/ekacare.png';
import timelineIcon from '../Assets/timelineIcon.png';

function Experience() {

    return (
        <div className="experience_container">
            <div>
            <h1 className="work_title"><img src={timelineIcon}>
            </img> My Internship Timeline</h1>
            </div>
            <div className='Timline-heading-bar'></div>
            <img className="timeline_img" src={timeLine}/>

        </div>
    )
}

export default Experience
