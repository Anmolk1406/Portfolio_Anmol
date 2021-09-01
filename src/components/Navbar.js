import React, { useState } from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';
import logo from '../Assets/Logo.png';
import { Button } from './Button';



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
            <Link><img src={logo}/></Link>

            <div className="navi-cons"> 
                <Link><button className="link-buttons activated">Home</button></Link>
                <Link><button className="link-buttons active">Work</button></Link>
                <Link><button className="link-buttons active">About</button></Link>
            </div>



        </div>
    )
}

export default Navbar
