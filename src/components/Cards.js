import React from 'react'
import CardItem from './CardItem'
import './card.css';
import workCardOne from '../Assets/work_card_one.png';
import workCardTwo from '../Assets/work_card_two.png';
import workCardThree from '../Assets/work_card_three.png';
import workCardLast from '../Assets/work_card_four.png';
import workCardFive from '../Assets/work_card_five.png';
import workCardSix from '../Assets/work_card_six.png';

function Cards() {
    const projects = [
        {
            imgUrl: workCardThree,
            subtitle: 'Showreel',
            name: 'Info graphic animations',
            description: 'Creative storytelling through motion design.',
            button_name: 'Play video',
            url: 'https://drive.google.com/file/d/1nTqrpS_4tN6Kwvgr-9PXkTnifBtvne_V/view?usp=sharing'
        },
        { 
            imgUrl: workCardTwo,
            subtitle: 'Motion design intern | eka•care',
            name: 'UI Interactive animations',
            description: 'Splash screen, on-boarding screen, loader - check out more work on notion documentation!',
            button_name: 'Open notion',
            url: 'https://www.notion.so/Eka-Care-Assests-266be9e50fe2458fae575141212fff2b'
        },
        {
            imgUrl: workCardFive,
            subtitle: 'Branding',
            name: 'eSports IITR Branding',
            description: 'Branding of the offical iit Roorkee group ESPORTS ITTR',
            button_name: 'Open',
            url: ''
        },
        {
            imgUrl: workCardSix,
            subtitle: 'Motion design intern | Curelink',
            name: '',
            description: 'My exprience with curelink',
            button_name: 'Read documentation',
            url: 'https://www.behance.net/gallery/125324027/2021-Mid-year-work-showcase'
        },
        {
            imgUrl: workCardOne,
            subtitle: 'Informative Blog',
            name: 'AE Shader - Reflection on objects',
            description: 'A simpler method to give shadows/reflections on different surfaces without keyframing and masking.',
            button_name: 'Open medium',
            url: 'https://medium.com/@anmol_k/shader-in-after-effects-143ce9161cb3'
        },
        {
            imgUrl: workCardLast,
            subtitle: 'Behance',
            name: 'More work?',
            description: 'Check out my more work on behance!',
            button_name: 'Open Behance',
            url: 'https://www.behance.net/gallery/125324027/2021-Mid-year-work-showcase'
        },
        
]
    return (
        <div className='cards' id='works-container'>
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
