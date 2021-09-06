import React from 'react';
import './experience.css';
import titleDarkMode from '../Assets/title_darkMode.png';
import Company from './Company';
import famPay from '../Assets/fampay.png';
import timeLine from '../Assets/timeline.png';
import ekaCare from '../Assets/ekacare.png';

function Experience() {
    const companies = [{
        imgUrl: famPay,
        company_name: 'Fampay',
        designation: 'Creative team',
        duration: '6 months'
    },
    {
        imgUrl: ekaCare, 
        company_name: 'Eka.Care',
        designation: 'Motion Designer',
        duration: '3 months'
    }
]

    return (
        <div className="experience_container">
            <h1 className="work_title">Experience<img className="title_ender" src={titleDarkMode}>
            </img></h1>
            <div className="timeline">
                <a className="year">2020 →</a>
                <Company company = {companies[0]} />
            </div>
            
            <img className="timeline_img" src={timeLine}/>

            <div className="timeline_second">
                <Company company = {companies[1]} />
                <a className="year">← 2021</a>
            </div>
        </div>
    )
}

export default Experience
