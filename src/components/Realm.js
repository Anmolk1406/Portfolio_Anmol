import React from 'react';
import './realm.css'
import Timeline from './Timeline';

function Realm() {
    return (
        <div className="realm">
            <div className="align">
            <h1>Welcome to the realm of <span style={{color: '#3C95FF'}}>COOL STUFF</span> </h1>     
                <Timeline className="animation" />
                </div>
        </div>
    )
}

export default Realm
