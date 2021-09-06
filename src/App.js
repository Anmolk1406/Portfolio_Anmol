import Navbar from "./components/Navbar";
import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import About from './components/pages/About'
import Home from './components/pages/Home'
import Blank from "./components/Blank";
import ScrollToTop from "react-scroll-to-top";
import ScrollUpAnimation from "./components/Scroll";
import {CircularProgressbarWithChildren,buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
};

useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

const clientHeight = document.documentElement.clientHeight;
const scrollHeight = document.documentElement.scrollHeight;
const scrollTop = document.documentElement.scrollTop;

const percentage = (scrollTop / (scrollHeight - clientHeight))*100;

const divStyle = {
  backgroundImage: 'linear-gradient(180deg, #3C95FF ' + Math.floor(percentage) + '%, transparent 0)'
};


  return (
    <>
      <Router>

        {/* <h1 style={{position: 'fixed', zIndex: '2000'}}>{Math.floor(percentage)}</h1> */}
        
        <div className="scrl-btn-container">
        
        <div class="radialProgressBar"
        style={divStyle}>
                <div class="overlay">
                      <ScrollToTop smooth className="scroll" component={<ScrollUpAnimation/>}/>
                </div>
          </div>

          </div>
      
        <Navbar />
        <Blank/>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App; 