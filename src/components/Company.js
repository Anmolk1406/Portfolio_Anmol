import React from 'react';
import './company.css';



function Company({company}) {
    return (
        <div className="company_container">
            <div className="img_container">
            <img className="image-1" src={company.imgUrl}></img>
            </div>
            <div className="company_details">
                <h1>{company.company_name}</h1>
                <p className="desig">{company.designation}</p>
                <div className="divider"></div>
                <p className="duration">{company.duration}</p>
            </div>
        </div>
    )
}

export default Company
