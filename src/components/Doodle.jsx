import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from '../lotties/bars.json';

class Doodle extends Component {
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
                  height={40}
                  width={40}
                />
              </div>
            );
          }
}

export default Doodle;