import React from 'react';
import './footerButtons.css';

function FooterButtons({button}) {
    let buttonLength = button.length;
    console.log(buttonLength);
    return (
        <div className='buttonContainer'>


            {button.map((btn, index) => (<div style={{display : 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <a className='footerIcons' href={btn.url} target="_blank">
                <button className="footer_button">
                    <img className="icon" src={btn.icon}/>
                </button>
            </a>
                {index <= buttonLength-2 && <div className='btnDivider'/>}
            </div>)
                )
                }
            {/* {
                button.map((btn, index) => (
                    <div>

                    </div>
                ))
            } */}
        </div>
    )
}
 
export default FooterButtons
