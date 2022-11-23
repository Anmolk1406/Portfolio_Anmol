import React from 'react'
import CardItem from './CardItem'
import './card.css';
import workCardOne from '../Assets/slice.png';
import workCardTwo from '../Assets/esports.png';
import workCardThree from '../Assets/esports.png';
import workCardFour from '../Assets/showreel.png';
import workCardFive from '../Assets/blog.png';
import workCardSix from '../Assets/curelink.png';
import workCardSeven from '../Assets/esportsJersey.png';
import workCardEight from '../Assets/showreel.png';
import workCardNine from '../Assets/ekacare.png';
import workCardTen from '../Assets/behanceCard.png'

function Cards() {

    const projects = [
        {
            imgUrl: workCardOne,
            textColor: "#FFFFFF",
            color: "slice",
            bgColor : "#432875",
            subtitle: 'Motion design intern | Slice',
            name: 'After effects showreel',
            description: 'Motion designer in the creative team of sliceit! I did 3 projects during this internship.',
            button_name: 'Play video',
            url: 'https://drive.google.com/drive/folders/1XHcWl6alNWXwzt3gZuR9q7mJgieTwxB1?usp=sharing'
        },
        {
            imgUrl: workCardTwo,
            color: "esports",
            bgColor : "radial-gradient(149.69% 129.29% at -49.69% 51.73%, #9573F5 0%, #461AC0 100%);",
            subtitle: 'Branding | E-Sports IITR',
            name: 'eSports IITR Branding',
            description: 'Branding of the IIT Roorkee group ESPORTS IITR',
            button_name: 'Open',
            url: 'https://www.behance.net/gallery/136159315/Esports-Branding-2022'
        },
        // {
        //     imgUrl: workCardThree,
        //     color: "esports",
        //     bgColor : "",
        //     subtitle: 'Stream overlay package | E-Sports IITR',
        //     name: 'My work with curelink',
        //     description: 'Motion design and React.js integration of stream overlay Package, with improvments on overlay UX.',
        //     button_name: 'Open notion',
        //     url: ''
        // },
        { 
            imgUrl: workCardFour,
            color: "showreel",
            bgColor : "#0E0E0E",
            subtitle: 'Showreel | After effects',
            name: 'My work with eka care',
            description: 'My After effects work showcase video | Showreel.',
            button_name: 'Open notion',
            url: 'https://drive.google.com/file/d/1nTqrpS_4tN6Kwvgr-9PXkTnifBtvne_V/view?usp=sharing'
        },
        {
            imgUrl: workCardFive,
            color: "blog",
            textColor: "#000000",
            bgColor : "#F5F5F5",
            subtitle: 'Informative blog | After effects',
            name: 'AE Shader - Reflection on objects',
            description: 'A simpler method to give shadows/reflections on different surfaces without keyframing and masking.',
            button_name: 'Open medium',
            url: 'https://medium.com/@anmol_k/shader-in-after-effects-143ce9161cb3'
        },
        {
            imgUrl: workCardSix,
            color: "curelink",
            subtitle: 'Motion design intern | Curelink',
            name: 'More work?',
            description: 'First motion designer at the scene. Crafted characters, splash, in-app animations and much more!',
            button_name: 'Open Behance',
            url: 'https://www.notion.so/My-experience-with-curelink-bca5d19d13d34ef5a7c5a8918f12b2ea'
        },
        {
            imgUrl: workCardSeven,
            color: "esports",
            subtitle: 'Merch| E-Sports IITR',
            name: 'More work?',
            description: 'Official Jerseys for the IIT Roorkee group ESPORTS IITR',
            button_name: 'Open Behance',
            url: 'https://www.behance.net/gallery/148351861/Esports-IITR-Jersey'
        },
        {
            imgUrl: workCardEight,
            color: "showreel",
            subtitle: 'Showreel | After effects',
            name: 'More work?',
            description: 'Showreel I made for my “Motion design workshop”.',
            button_name: 'Open Behance',
            url: 'https://drive.google.com/file/d/1Qn1mp7X955yIK9cgMqY6e00ooFRtJoIQ/view?usp=sharing'
        },
        {
            imgUrl: workCardNine,
            color: "ekaCare",
            subtitle: 'Motion design intern | eka.care',
            name: 'More work?',
            description: 'My work with eka.care. Open to see more!',
            button_name: 'Open Behance',
            url: 'https://www.notion.so/Eka-Care-266be9e50fe2458fae575141212fff2b'
        },
        {
            imgUrl: workCardTen,
            color: "behance",
            subtitle: 'Behance',
            name: 'More work?',
            description: 'My work with eka.care. Open to see more!',
            button_name: 'Open Behance',
            url: 'https://www.behance.net/gallery/125324027/2021-Mid-year-work-showcase'
        }
        
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
