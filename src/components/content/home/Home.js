import React from 'react';
import Carousel from '@brainhubeu/react-carousel';

import ProjectData from './../../../assets/json/projects.json';
import CodingIcon from '../../../assets/imgs/coding-icon-display.png';
import MobileCodingIcon from '../../../assets/imgs/coding-icon.png'

import ReactText from '../../../assets/imgs/react.png';
import NodeText from '../../../assets/imgs/node-js.png';
import HtmlText from '../../../assets/imgs/html.png';
import CssText from '../../../assets/imgs/css.png';

export default class Home extends React.Component { 
    constructor(){
        super();
        this.state = {
            skillList: [],
            skillImages: []
        }
    };
    
    componentDidMount(){
        const skillImages = [];
        skillImages[0] = <img src={ReactText} />
        skillImages[1] = <img src={NodeText} />
        skillImages[2] = <img src={HtmlText} />
        skillImages[3] = <img src={CssText} />
        this.setState({skillImages});
        
        let skillList = [];
        let listedTech = [];
            
        ProjectData.projects.map((project, key) => {
            project.techstack.forEach(tech => {
                if(listedTech.includes(tech) !== true) {
                    listedTech.push(tech);
                    let techJSX = <div>{tech}</div>;
                    skillList.push(techJSX);
                }
            });
        });
        this.setState({skillList});
    };

    render(){
        return (
            <div id="home-content" className="home-section">
                <div className="home-content__text-block">
                    <div className="home-content__text-block__title__wrapper">
                        <h2 className="home-content__text-block__title">ABOUT ME</h2>
                    </div>
                    <p className="home-content__text-block__body">
                    I’m Josh, a creative junior developer based in London, aspiring to establish myself as a fully fledged full stack developer. 
                    </p>
                    <p className="home-content__text-block__body"> 
                    Passionate about creating responsive applications, blending functionality with an intuitive UX/UI experience.
                    </p>
                    <p className="home-content__text-block__body"> 
                    I am seeking exposure to modern web technologies, with a tech stack centred around React and NodeJS.
                    </p>
                </div>
                <img className="home-content__image-mobile" src={MobileCodingIcon}/>
                <div className="home-content__image-wrapper">
                    <img className="home-content__image" src={CodingIcon} alt="coding-logo"/>
                    <div className="carousel__wrapper-skills">
                        <Carousel
                            slides={this.state.skillImages}
                            infinite="true"
                            autoPlay="2500"
                        />
                    </div>
                </div>
            </div>
        )
    };
};