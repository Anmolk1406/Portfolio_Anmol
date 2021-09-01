import React from 'react'
import CardItem from './CardItem'
import './card.css';
import { Button } from './Button';
import workCardOne from '../Assets/work_card_one.png';
import workCardTwo from '../Assets/work_card_two.png';
import workCardThree from '../Assets/work_card_three.png';
import workCardFour from '../Assets/work_card_four.png';

function Cards() {
    const projects = [
        {
            imgUrl: workCardOne,
            subtitle: 'Informative Blog',
            name: 'AE Shader - Reflection on objects',
            description: 'A simpler method to give shadows/reflections on different surfaces without keyframing and masking.',
            button_name: 'Open medium'
        },
        { 
            imgUrl: workCardTwo,
            subtitle: 'Motion design intern | eka•care',
            name: 'UI Interactive animations',
            description: 'Splash screen, on-boarding screen, loader - check out more work on notion documentation!',
            button_name: 'Open notion'
        },
        {
            imgUrl: workCardThree,
            subtitle: 'Showreel',
            name: 'Info graphic animations',
            description: 'Creative storytelling through motion design.',
            button_name: 'Play video'
        },
        {
            imgUrl: workCardFour,
            subtitle: 'Behance',
            name: 'More work?',
            description: 'Check out my more work on behance!',
            button_name: 'Open Behance'
        },
]
    return (
        <div className='cards'>
                <div className="card_container">
                    <div className="card_wrapper">
                            <CardItem
                                projects = {projects} />
                    </div>
                </div>
        </div>
    )
}

export default Cards
