import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from '../lotties/arrow_down.json';

class Scroll extends Component {
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
                  height={60}
                  width={60}
                />
              </div>
            );
          }
}

export default Scroll;