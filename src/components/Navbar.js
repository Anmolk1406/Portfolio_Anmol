import React, { useState } from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';
import logo from '../Assets/Logo.png';
import DrawSVG from 'react-svg-drawing';
import Anmol from './Anmol';
import ScrollToTop from "react-scroll-to-top";


function Navbar() {
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
                <Link><button className="link-buttons activated">Home</button></Link>
                <Link><button className="link-buttons active">Work</button></Link>
                <Link><button className="link-buttons active">About</button></Link>
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
