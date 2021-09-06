import React, { useState } from 'react';
import './navbar.css'
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import Anmol from './Anmol';
import {Link as ScrollLink, animateScroll as scroll, scroller} from 'react-scroll'

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
            <Link style={{marginLeft: '20%'}}> <Anmol/></Link>
            {/* <Link><img src={logo}/></Link>  */}

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