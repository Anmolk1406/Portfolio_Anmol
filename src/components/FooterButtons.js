import React from 'react';
import './footerButtons.css';

function FooterButtons({button}) {
    return (
        <div>
            {button.map(btn => <button className="footer_button">
                <img className="icon" src={btn.icon}/>{btn.name}
                </button>)
                }
        </div>
    )
}

export default FooterButtons
