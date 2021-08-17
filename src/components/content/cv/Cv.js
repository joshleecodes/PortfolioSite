import React from 'react';
import CV from './../../../assets/CV.pdf';

export default () => (
    <div id="cv-content" className="cv-section">
        <div className="cv__title__wrapper">
            <h2 className="cv__title">CURRICULUM VITAE</h2>
        </div>
        <div className="cv-content">
            <div className="cv-wrapper">
                <embed src={CV} width="800px" height="1200px"/>
            </div>
        </div>
    </div>
);