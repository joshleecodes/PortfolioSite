import React from 'react';
import emailjs from 'emailjs-com';

import GithubIcon from '../../../assets/imgs/SVG/social-icons/github/github.svg';
import LinkedInIcon from '../../../assets/imgs/SVG/social-icons/linkedin/linkedin.svg';
import EmailIcon from '../../../assets/imgs/SVG/social-icons/email/email.svg';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            feedbackMessage: ""
        }
    }

    sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('gmail','portfolio_site', e.target, 'user_2bIa3aWG5ACO2JLlBUZPT')
            .then((result) => {
                if(result.text === 'OK'){
                    let feedbackMessage = "Message Sent";
                    this.setState({feedbackMessage});
                }
            }, (error) => {
                let feedbackMessage = "Oops, something went wrong"
                this.setState({feedbackMessage});
            });
        e.target.reset();
    }

    render() {
        return (
            <div id="contact-content" className="contact-section" >
                <div className="contact__title__wrapper">
                    <h2 className="contact__title">CONTACT</h2>
                    <h3 className="contact-title">Feel free to get in touch.</h3>
                </div>
                
                
                <div className="contact-form__containter">
                    <form className="contact-form" onSubmit={this.sendEmail} encType="text/plain">
                        <div className="contact-form__personal-info">
                            <input className="contact-form__personal-info__name" placeholder="Full name" required name="name" autoComplete="off"/>
                            <input className="contact-form__personal-info__email" placeholder="Email" required name="email" autoComplete="off"/>
                        </div>
                        <textarea className="contact-form__message" placeholder="Write your message here" maxLength="495" name="message" autoComplete="off" required/>  
                        <button className="contact-form__submit">SEND</button>
                    </form>
                    <div className="feedback__wrapper">
                        <h3 className="feedback__message">{this.state.feedbackMessage}</h3>
                    </div>
                </div>
                <div className="contact-social__wrapper">
                    <a className="contact-git__wrapper" href="github.com/joshleecodes">
                        <img className="contact-social" src={GithubIcon}/>
                    </a>
                    <a className="contact-linkedin__wrapper" href="se.linkedin.com/in/joshua-lee-2830746b">
                        <img className="contact-social" src={LinkedInIcon}/>
                    </a>
                    <a className="contact-email__wrapper" href="mailto: joshlee.dev@gmail.com">
                        <img className="contact-social" src={EmailIcon}/>
                    </a>
                </div>
            </div>
        );
    }
} 

