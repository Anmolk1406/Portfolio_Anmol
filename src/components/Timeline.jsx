import React, { Component } from 'react';
import Lottie from 'react-lottie';
import timeLineData from '../lotties/timeline.json'

class Timeline extends Component{
    render(){
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: timeLineData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
            },
        };

        return(
            <div style={{width: 'fit-content'}}>
            <Lottie
              options={defaultOptions}
              height={200}
              width={200}
            />
          </div> 
        );
    }
}

export default Timeline
