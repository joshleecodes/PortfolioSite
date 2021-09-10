import React from 'react';
import { HashLink as NavLink } from 'react-router-hash-link';
import { scrollToTop } from './../../../util/scrollHelper';

import GithubIcon from '../../../assets/imgs/SVG/social-icons/github/github.svg';
import LinkedInIcon from '../../../assets/imgs/SVG/social-icons/linkedin/linkedin.svg';
import EmailIcon from '../../../assets/imgs/SVG/social-icons/email/email.svg';
import UpButton from './../../../assets/imgs/SVG/arrow-icons/returnTop.svg';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="footer-content" className="footer-content">
                <NavLink className="reset-button" to="#landing-content" onClick={scrollToTop}>
                    <img
                        id="return-top"
                        className="reset-img"
                        src={UpButton}
                        onMouseOver={this.props.handleIconHover} 
                        onMouseLeave={this.props.handleIconHoverOff} 
                    />
                </NavLink>
                <div className="footer-content__wrapper">
                    <div className="footer-signature-wrapper">
                        <p className="footer-designed footer-text">Designed & Developed by</p>
                        <p className="footer-signature footer-text">Josh Lee &copy;2020</p>
                    </div>
                    <div className="footer-social__wrapper">
                        <a className="footer-git__wrapper" href="https://github.com/joshleecodes" target="_blank">
                            <img className="footer-social" src={GithubIcon}/>
                        </a>
                        <a className="footer-linkedin__wrapper" href="https://www.linkedin.com/in/joshleedev/" target="_blank" >
                            <object
                                type="image/svg+xml"
                                className="footer-social" 
                                data={LinkedInIcon}
                            />
                        </a>
                        <a className="footer-email__wrapper" href="mailto: joshlee.dev@gmail.com">
                            <img className="footer-social" src={EmailIcon}/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
};