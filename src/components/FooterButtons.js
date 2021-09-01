import React from 'react';
import './footerButtons.css';

function FooterButtons({button}) {
    return (
        <div>

            {button.map(btn => <a href={btn.url} target="_blank">
             <button className="footer_button">
                <img className="icon" src={btn.icon}/>{btn.name}
                </button></a>)   
                }
                
        </div>
    )
}

export default FooterButtons
