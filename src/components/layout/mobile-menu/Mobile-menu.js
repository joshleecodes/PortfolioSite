import React from 'react';
import { HashLink as NavLink } from 'react-router-hash-link';

//SVG imports
import SiteLogo from './../../../assets/imgs/site-logo.png';
import OpenMenuIcon from './../../../assets/imgs/SVG/menu-icons/menu.svg';
import CloseMenuIcon from './../../../assets/imgs/SVG/menu-icons/cross.svg';
import CV from './../../../assets/CV.pdf';

import GithubIcon from '../../../assets/imgs/SVG/social-icons/github/github.svg';
import LinkedInIcon from '../../../assets/imgs/SVG/social-icons/linkedin/linkedin.svg';
import EmailIcon from '../../../assets/imgs/SVG/social-icons/email/email.svg';

export default class MobileMenu extends React.Component {
    constructor(props){
        super();
        this.state = {
            currentSection: 'menu-landing',
            menuOpen: false
        }
        this.handleOpenMenu = this.handleOpenMenu.bind(this);
        this.handleCloseMenu = this.handleCloseMenu.bind(this);
    }

    handleOpenMenu() {
        document.getElementsByClassName("menu-open")[0].style.display = "none";
        document.getElementsByClassName("menu-close")[0].style.display = "block";
        document.getElementById("mobile-menu").classList.add("mobile-menu__wrapper-open");
        document.body.style.overflow = "hidden";
        this.setState({menuOpen: true}, ()=> this.handleSectionHighlight());
    }

    handleCloseMenu(){
        document.getElementsByClassName("menu-close")[0].style.display = "none";
        document.getElementsByClassName("menu-open")[0].style.display = "flex";
        document.getElementById("mobile-menu").classList.remove("mobile-menu__wrapper-open");
        document.body.style.overflow = "visible";
        let currentSection = this.state.currentSection;

        if(currentSection != "menu-landing"){
            document.getElementById(currentSection).classList.toggle("menu-link__active"); 
        }

        this.setState({menuOpen: false});
    }

    handleSectionHighlight(){
        let offset = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        let currentSection = this.state.currentSection; 
        let currentSectionClassList = document.getElementById(currentSection).classList;

        if(offset <= 399){
            currentSection = 'menu-landing';
        }
        else if(offset >= 400 && offset < 999){
            document.getElementById("menu-home").classList.add('menu-link__active');
            currentSection = 'menu-home';
        } 
        else if(offset >= 1000 && offset < 1599){
            document.getElementById("menu-projects").classList.add('menu-link__active');
            currentSection = 'menu-projects';
        }
        else if(offset >= 1600){
            document.getElementById("menu-contact").classList.add('menu-link__active');
            currentSection = 'menu-contact';
        }
        this.setState({currentSection});
    }

    render(){
        return(
            <div className="mobile-menu__wrapper" id="mobile-menu" data-aos="fade" data-aos-duraction="1200" data-aos-anchor-placement="#landing-content"> 
                <a className="menu-open" onClick={this.handleOpenMenu}>
                    <img
                        className="menu-icon"
                        src={OpenMenuIcon}
                    />
                </a>
                <a className="menu-close" onClick={this.handleCloseMenu}>
                    <img 
                        className="menu-icon"
                        src={CloseMenuIcon}
                    />
                </a>
                {this.state.menuOpen &&
                    <div className="menu-list__wrapper" data-aos="flip-right" data-aos-duraction="200" data-aos-mirror="true">
                        <div className="-list">
                            <NavLink className="" to="#landing-content" onClick={this.handleCloseMenu}><img className="menu__site-icon" id="menu-landing" src={SiteLogo} /></NavLink>
                            <div className="menu-option">
                                <NavLink className="menu-link" id="menu-home" to="#home-content" onClick={this.handleCloseMenu}>ABOUT</NavLink>
                            </div>
                            <div className="menu-option">
                                <NavLink className="menu-link" id="menu-projects" to="#projects-content" onClick={this.handleCloseMenu}>PROJECTS</NavLink>
                            </div>
                            <div className="menu-option">
                                <NavLink className="menu-link" id="menu-contact" to="#contact-content" onClick={this.handleCloseMenu}>CONTACT</NavLink>
                            </div>
                            <div className="menu-option">
                                <NavLink className="menu-link open-cv" id="menu-cv" to={CV} target="_blank" onClick={this.handleCloseMenu}>OPEN CV</NavLink>
                            </div>
                            <div className="mobile-social__wrapper">
                                <a className="mobile-git__wrapper" href="https://github.com/joshleecodes" target="_blank">
                                    <img className="mobile-social" src={GithubIcon}/>
                                </a>
                                <a className="mobile-linkedin__wrapper" href="https://www.linkedin.com/in/joshleedev/" target="_blank">
                                    <object
                                        className="mobile-social" 
                                        data={LinkedInIcon}
                                    />
                                </a>
                                <a className="mobile-email__wrapper" href="mailto: joshlee.dev@gmail.com">
                                    <img className="mobile-social" src={EmailIcon}/>
                                </a>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}