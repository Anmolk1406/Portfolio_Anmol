import React from 'react';
import '../App.css';
import { Button } from './Button';
import './herosection.css';
import arrowRight from '../Assets/arrow.png'
import Doodle from './Doodle';
import TextTransition, { presets } from 'react-text-transition';
import { useState } from 'react';
import Keyframe from '../Assets/keyframe.png';
import { SmoothCorners } from 'react-smooth-corners';


function HeroSection() {
    const TEXTS = [
        "Anmol",
        "Lomna"
      ];
        const [index, setIndex] = React.useState(0);
      
        React.useEffect(() => {
          const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            2500 // every 3 seconds
          );
          return () => clearTimeout(intervalId);
        }, []);

    return (
        <div className='hero-container' >
            <h1> Hi! I'm&nbsp;
            <TextTransition
            inline = {true}
        text={ TEXTS[index % TEXTS.length] }
        springConfig={ presets.stiff }
      /></h1>
            <div className='hero_subtitle'>
                <p>I'm a pixel pusher</p>
                <img src={Keyframe}></img>
            </div>
            <div className="hero-btns">
            <Button url={"mailto:anmol_k@cy.iitr.ac.in"} >Send a Message</Button>
                
            </div>
        </div>
    )
}
 
export default HeroSection
