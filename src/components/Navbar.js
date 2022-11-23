import React, { useState } from 'react';
import './navbar.css'
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import Anmol from '../Assets/Anmol_logo.png';
import {Link as ScrollLink, animateScroll as scroll, scroller} from 'react-scroll'
import { Button } from './Button';
import { SmoothCorners } from 'react-smooth-corners'

// scroller.scrollTo('myScrollToElement', {
//     duration: 1500,
//     delay: 100,
//     smooth: true,
//     containerId: 'ContainerElementID',
//     offset: 50, // Scrolls to element + 50 pixels down the page
//     ...
// })

function Navbar() {
    const history = useHistory();
    const {url, path} = useRouteMatch();
    const [active, setActive] = useState('home');
    const [button, setButton] = useState(true);
    const showButton = () => {
        if(window.innerWidth <= 960)
        {
            setButton(false);
        } else 
        {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);

    return (
        <div className="navbar-container">
            <img src={Anmol} style={{marginLeft: '10%'}}></img>

            <div className="navi-cons">  
                <ScrollLink className="c-main__contact" to="home-container" smooth={true} duration={800}>
                    <Link to='/'>
                        <button onClick={()=>setActive('home')} className={`link-buttons ${active === 'home' ? 'activated' : 'active'}`}>Home</button>
                    </Link>
                </ScrollLink>
                <ScrollLink className="c-main__contact" to="works-container" offset={-1 * 18 * window.innerHeight / 100} smooth={true} duration={800}>
                    <Link to='/'>
                        <button onClick={()=>setActive('work')} className={`link-buttons ${active === 'work' ? 'activated' : 'active'}`}>Work</button>
                    </Link>
                </ScrollLink>
                <Link to='/about'>
                    <button onClick={()=>setActive('about')} className={`link-buttons ${active === 'about' ? 'activated' : 'active'}`}>About</button>
                </Link>
                
            </div>

            <Button className='send-msg' url={"mailto:anmol_k@cy.iitr.ac.in"}>Drop a message</Button>
        

        </div>
        
    )
}

export default Navbar