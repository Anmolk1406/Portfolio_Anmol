import React from 'react';
import './footer.css';
import FooterButtons from './FooterButtons';
import instaIcon from '../Assets/instaLink.png';
import linkedIn from '../Assets/linkedLink.png';
import Behance from '../Assets/behanceLink.png';
import twitter from '../Assets/twiiterLink.png';
import mail from '../Assets/mail.png'
import { Button } from './Button';

function Footer() {

    const buttons = [
    {
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
            <h1>Let's Talk</h1>
            <p>Wanna make cool stuff together?
            <br/>Or crack lame jokes?</p>

            <Button url={"mailto:anmol_k@cy.iitr.ac.in"}>Drop a message</Button>
                </div>

        <div className="socialSection">
                <h1>Are you a good stalker?</h1>
                <p>Let’s find out!</p>
            <div className="footer_buttons">
                    <FooterButtons button = {buttons}/>
            </div>
            </div>
        </div>

         </>
    )
}

export default Footer
