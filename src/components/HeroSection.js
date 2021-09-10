import React from 'react';
import '../App.css';
import { Button } from './Button';
import './herosection.css';
import arrowRight from '../Assets/arrow.png'
import Doodle from './Doodle';

function HeroSection() {
    return (
        <div className="hero-container">
            <h1>Hi! I'm Unmole</h1> 
            <div className="hero_subtitle">
                <p>I like to set things in motion!</p>
                <Doodle className="motion_bars"/>
            </div>
            <div className="hero-btns">
                <Button className='btn' url="mailto:anmol_k@cy.iitr.ac.in" buttonStyle='btn--primary'>
                    Drop a message!<img className='arrow_right' src={arrowRight}/> 
                </Button>
                
            </div>
        </div>
    )
}

export default HeroSection
