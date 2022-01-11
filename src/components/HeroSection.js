import React from 'react';
import '../App.css';
import { Button } from './Button';
import './herosection.css';
import arrowRight from '../Assets/arrow.png'
import Doodle from './Doodle';
import TextTransition, { presets } from 'react-text-transition';



function HeroSection() {
    const TEXTS = [
        "Anmol",
        "Lomna"
      ];
        const [index, setIndex] = React.useState(0);
      
        React.useEffect(() => {
          const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            3000 // every 3 seconds
          );
          return () => clearTimeout(intervalId);
        }, []);


    return (
        <div className="hero-container">
            <h1> Hi!, I'm&nbsp;
            <TextTransition
            inline = {true}
        text={ TEXTS[index % TEXTS.length] }
        springConfig={ presets.stiff }
      /></h1>
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
