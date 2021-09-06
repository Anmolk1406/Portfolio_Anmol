import React, { useState } from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';
import logo from '../Assets/Logo.png';
import DrawSVG from 'react-svg-drawing';
import Anmol from './Anmol';
import ScrollToTop from "react-scroll-to-top";
import {Link as ScrollLink, animateScroll as scroll} from 'react-scroll'


function Navbar() {
    const [active, setActive] = useState('')
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
            <Link> <Anmol/></Link>
            {/* <Link><img src={logo}/></Link>  */}

            <div className="navi-cons">  
                <Link to='#'><button onClick={()=> setActive('home')} className={`link-buttons ${active === 'home' ? 'activated' : 'active'}`}>Home</button></Link>
                <ScrollLink className="c-main__contact" to="works-container" offset={-1 * 18 * window.innerHeight / 100} smooth={true} duration={800}><button onClick={()=> setActive('work')} className={`link-buttons ${active === 'work' ? 'activated' : 'active'}`}>Work</button></ScrollLink>
                <Link><button onClick={()=> setActive('about')} className={`link-buttons ${active === 'about' ? 'activated' : 'active'}`}>About</button></Link>
            </div>

            <div className="hamburger_container">
            <div class="three col">
        <div class="hamburger" id="hamburger-12">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
      </div>
            </div>
        </div>
    )
}

export default Navbar
