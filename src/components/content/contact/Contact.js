import React from 'react';
import emailjs from 'emailjs-com';



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
                <div className="contact__title__wrapper" data-aos="fade-right" data-aos-duration="1200" data-aos-anchor-placement="#contact-content" data-aos-once="true">
                    <h2 className="contact__title">CONTACT</h2>
                    <p className="contact-text">Want to work together or find out more about my projects?</p>
                    <p className="contact-text">Drop me a message and I'll be happy to arrange a chat.</p>
                </div>
                <a className="contact-button__mobile" href="mailto: joshlee.dev@gmail.com" data-aos="fade-left" data-aos-duration="1200" data-aos-anchor-placement="#contact-content" data-aos-once="true">GET IN TOUCH</a>  
            </div>
        );
    }
} 

