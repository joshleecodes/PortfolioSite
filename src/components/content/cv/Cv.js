import React from 'react';
import CV from './../../../assets/CV.pdf';

export default class Cv extends React.Component {
    constructor(props){
        super(props); 
    }

    render() {
        return (
            <div id="cv-content" className="cv-section">
                <div className="cv__title__wrapper" data-aos="fade-right" data-aos-duration="1200" data-aos-anchor-placement="#cv-content" data-aos-once="true" data-aos-delay="200">
                    <h2 className="cv__title">CURRICULUM VITAE</h2>
                </div>
                
                <div className="cv-content" data-aos="fade-up" data-aos-duration="1200" data-aos-anchor-placement="#cv-content" data-aos-once="true" data-aos-delay="200">
                    {this.props.isTablet
                        ?   
                        <div className="cv-wrapper">
                            <embed src={CV} width="675px" height="975px"/>
                        </div>
                        :
                        <div className="cv-wrapper">
                            <embed src={CV} width="900px" height="1300px"/>
                        </div>
                    }
                </div>
            </div>
        );
    }
};


    
