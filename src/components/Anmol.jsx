import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from '../lotties/anmol_animation.json';

class Anmol extends Component {
    render(){
            const defaultOptions = {
              loop: true,
              autoplay: true,
              animationData: animationData,
              rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
              },
            };
        
            return (
              <div>
                <Lottie
                  options={defaultOptions}
                  height={80}
                  width={120}
                />
              </div>
            );
          }
}

export default Anmol;