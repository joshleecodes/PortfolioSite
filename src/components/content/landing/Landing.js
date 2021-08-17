import React from 'react';
import TextLoop from 'react-text-loop';

import SiteLogo from './../../../assets/imgs/site-logo.png';

export default () => (
    <div className="landing-content content" id="landing-content" data-aos="flip-right" data-aos-duration="1200">
        <div className="landing-content__wrapper">
            <img className="landing-content__img" src={SiteLogo}/>
            <h1 className="landing-text-wrapper" data-aos="fade" data-aos-duraction="1200" data-aos-delay="1000">     
                <TextLoop className="animated-text" springConfig={{ stiffness: 360, damping: 20 }}>
                    <span> </span>
                    <span className="animated-text">Software</span>
                    <span className="animated-text">Creative</span>
                    <span className="animated-text">JavaScript</span>
                    <span className="animated-text">Passionate</span>
                    <span className="animated-text">React</span>
                    <span className="animated-text">Node.js</span> 
                </TextLoop>{" "}
                Developer
            </h1>
        </div>
    </div>
);