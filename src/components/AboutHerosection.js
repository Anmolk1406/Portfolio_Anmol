import React from 'react';
import './aboutme.css';
import titleDark from '../Assets/title_darkMode.png';
import profileImage from '../Assets/pfp.png';

function AboutHerosection() {
    return (
        <div className="about-section">
            <div className="about-text">
            <h1>About <img className="title-ender" src={titleDark}></img></h1>
            <p>
                {"Gamer, Average CHAI enjoyer! \n Looking forward to learn advanced video editing, 3D and VFX. \nCurrently in 3RD Year IIT, Roorkee. Enjoying my online college subscription ;-;"}
            </p>
            </div>
            <img className="profile" src={profileImage}></img>
            </div>
    
    )
}

export default AboutHerosection
