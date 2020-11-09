import React from 'react';
import { HashLink as NavLink } from 'react-router-hash-link';
import { scrollToTop, scrollTo } from './../../../util/scrollHelper';

//Icon Imports
import SiteLogo from './../../../assets/imgs/SVG/site-logo.svg';
import GithubIcon from './../../../assets/imgs/SVG/social-icons/github/github.svg';
import LinkedInIcon from './../../../assets/imgs/SVG/social-icons/linkedin/linkedin.svg';
import EmailIcon from './../../../assets/imgs/SVG/social-icons/email/email.svg';
import MenuIcon from './../../../assets/imgs/SVG/menu-icons/menu.svg';
import ExitMenuIcon from './../../../assets/imgs/SVG/menu-icons/cross.svg';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSection: 'nav-landing'
        }
        this.handleActiveSection = this.handleActiveSection.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleActiveSection);
        return this.props.setHeaderOffSet(document.getElementById("header").offsetTop);
    }

    handleActiveSection() {
       let offset = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
       let currentSection = this.state.currentSection;
       let currentSectionClassList = document.getElementById(this.state.currentSection).classList;
    
        if(offset <= 499) {
            if(currentSection != "nav-landing") { currentSectionClassList.toggle("site-link-active"); }
            currentSection = "nav-landing";
        }
        else if(offset >= 500 && offset < 1500 ) {
            if(currentSection != "nav-landing") { currentSectionClassList.toggle("site-link-active"); }
            document.getElementById("#nav-home").classList.add('site-link-active');
            currentSection = "#nav-home";
        }
        else if(offset >= 1501 && offset < 2600) {
            if(currentSection != "nav-landing") { currentSectionClassList.toggle("site-link-active"); }
            document.getElementById("#nav-projects").classList.add('site-link-active');
            currentSection = "#nav-projects";
        }
        else if(offset >= 2601 && offset < 4200) {
            if(currentSection != "nav-landing") { currentSectionClassList.toggle("site-link-active"); }
            document.getElementById("#nav-cv").classList.add('site-link-active');
            currentSection = "#nav-cv";
        }
        else if(offset >= 4201) {
            if(currentSection != "nav-landing") { currentSectionClassList.toggle("site-link-active"); }
            document.getElementById("#nav-contact").classList.add('site-link-active');
            currentSection = "#nav-contact";
        }
        this.setState({currentSection});
    }

    render() {
        return (
            <div id="header" className="header">
                <div className="header__container">
                    <NavLink to="#landing-content" onClick={scrollToTop}>
                        <img 
                            className="header__logo" 
                            id="nav-landing"
                            onClick={this.onNavLinkClick}
                            onMouseOver={this.props.handleIconHover} 
                            onMouseLeave={this.props.handleIconHoverOff}  
                            src={SiteLogo}
                        />
                    </NavLink>
                    <div className="header__content-section">
                        <div className="header__content-section__site-link-wrapper">
                            <NavLink className="header__content-section__site-link" id="#nav-home" to="#home-content" onClick={scrollTo}>ABOUT</NavLink>
                            <NavLink className="header__content-section__site-link" id="#nav-projects" to="#projects-content"  onClick={scrollTo}>PROJECTS</NavLink>
                            <NavLink className="header__content-section__site-link" id="#nav-cv" to="#cv-content"  onClick={scrollTo}>CV</NavLink>
                            <NavLink className="header__content-section__site-link" id="#nav-contact" to="#footer-content"  onClick={scrollTo}>CONTACT</NavLink>
                        </div>
                        <div className="header__content-section__social-link-wrapper">
                            <a href="https://github.com/joshleedev" target="_blank">
                                <img
                                    id="github-icon" 
                                    className="social-link-icon header__content-section__social-link"  
                                    onMouseOver={this.props.handleIconHover} 
                                    onMouseLeave={this.props.handleIconHoverOff} 
                                    src={GithubIcon}
                                    alt="github"
                                />
                            </a>
                            <a href="https://www.linkedin.com/in/joshleedev/" target="_blank">
                                <img 
                                    id="linkedin-icon" 
                                    className="social-link-icon"
                                    onMouseOver={this.props.handleIconHover} 
                                    onMouseLeave={this.props.handleIconHoverOff} 
                                    src={LinkedInIcon} 
                                    alt="linkedIn"
                                />
                            </a>
                            <a href="mailto: joshlee.dev@gmail.com">
                                <img 
                                    id="email-icon" 
                                    className="social-link-icon"
                                    onMouseOver={this.props.handleIconHover} 
                                    onMouseLeave={this.props.handleIconHoverOff} 
                                    src={EmailIcon} 
                                    alt="email"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="header__border"></div>
            </div>
        );
    }
} 

                   