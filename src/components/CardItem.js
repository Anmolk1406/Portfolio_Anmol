import React from 'react';
import arrowRight from '../Assets/arrow.png';
import { Button } from './Button';
import './carditem.css';
import titleDarkMode from '../Assets/title_darkMode.png';
import extLink from '../Assets/basic/external_link.png';
import projectIcon from '../Assets/projectIcon.png'
import eye from '../Assets/Eye.png'

function CardItem({projects}) {

    return (
        <div className="card_items_container">
            <div>
        <h1 className="work_title"><img src={projectIcon}>
            </img> Work/Projects</h1>
        <div className="global_cards">
           {
           projects.map(project =><a className='linkContainer' href={project.url} target="_blank"> <div className={`work_card ${project.color}Color`}>
                <img className='viewIcon' src={eye}></img>
            <img className='image' src={project.imgUrl}></img>
                 <div className='textContainer' style={project.textColor && {color : project.textColor}}>
                 <p style={{fontSize: "24px", fontWeight: "600", paddingBottom: "10px", width: "fit-content",
                  borderBottom: "2px rgba(0, 0, 0, 0.2) solid"}}>{project.subtitle}</p>
                 {/* <h1>{project.name}</h1> */}
                <p style={{fontSize: "20px", fontWeight: "200"}}>{project.description}</p> 
                </div>
            </div></a>
            )
            } 
            </div>
        </div>
        </div>
    )
}

export default CardItem
