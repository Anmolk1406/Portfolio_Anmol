import React from 'react';
import arrowRight from '../Assets/arrow.png';
import { Button } from './Button';
import './carditem.css';
import titleDarkMode from '../Assets/title_darkMode.png';
import extLink from '../Assets/basic/external_link.png';

function CardItem({projects}) {
    return (
        <div className="card_items_container">
            <div>
        <h1 className="work_title">Work<img className="title_ender" src={titleDarkMode}>
            </img></h1>
        <div className="global_cards">
           {
           projects.map(project => <div className='work_card'>
                <img className="image_holder"
                 alt="Card Image" src ={project.imgUrl}></img>
                <p>{project.subtitle}</p>
                <h1>{project.name}</h1>
                <p>{project.description}</p> 
                <Button url={project.url} className='btn' buttonStyle="btn--primary">
                    {project.button_name} <img src={arrowRight} className='arrow'></img>
                </Button>
            </div>)
            } 
            </div>
        </div>
        </div>
    )
}

export default CardItem
