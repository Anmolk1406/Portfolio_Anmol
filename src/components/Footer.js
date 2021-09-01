import React from 'react';
import './footer.css';
import FooterButtons from './FooterButtons';
import instaIcon from '../Assets/insta.png';
import linkedIn from '../Assets/linkedin.png';
import Behance from '../Assets/behance.png';
import twitter from '../Assets/twitter.png';

function Footer() {

    const buttons = [{
        icon: instaIcon,
        name: 'Instagram',
        url: 'https://www.instagram.com/almost.anmol/'
    },
    {
        icon: linkedIn,
        name: 'linkedin' ,
        url: 'https://www.linkedin.com/in/anmol-kumar-49678a198/'
    }, 
    {
        icon: Behance,
        name: 'behance',
        url: 'https://www.behance.net/anmolkumar6'
    },
    {
        icon: twitter,
        name: 'twitter',
        url: 'https://twitter.com/AlmostAnmol'
    }
    ]
    return (
        <>
        <div className="footer">
            <div className="footer_text">
            <h1>So this is the end?</h1>
            <p>Is it really! Don’t you want to 
                connect after seeing this awesome portfolio!</p>
                </div>

        <div className="footer_buttons">
                <FooterButtons button = {buttons}/>
        </div>
        </div>



        <div className="footer_ending">
                <p>
                    Website Designed and Developed by Me!
                </p>
                    <p> 
                        Special thanks to ayaneshu and supratim for helping me in design
                        and development of this website ❤️
                    </p>
         </div>
         </>
    )
}

export default Footer
