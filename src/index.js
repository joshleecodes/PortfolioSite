import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.scss';

//Component Imports
import NotFound from './components/content/not-found/Not-found';
import MobileMenu from './components/layout/mobile-menu/Mobile-menu';
import Header from './components/layout/header/Header';
import Landing from './components/content/landing/Landing';
import Home from './components/content/home/Home';
import ProjectList from './components/content/project-list/Project-list';
import Cv from './components/content/cv/Cv';
import Contact from './components/content/contact/Contact';
import Footer from './components/layout/footer/Footer';

//Icon imports
import SiteIcon from './assets/imgs/site-logo.png';
import SiteHoverIcon from './assets/imgs/site-logo-inverted.png';

//SVG Imports
import Github from './assets/imgs/SVG/social-icons/github/github.svg';
import GithubActive from './assets/imgs/SVG/social-icons/github/github-active.svg';
import GithubAlt from './assets/imgs/SVG/social-icons/github/github-alt.svg';
import Linkedin from './assets/imgs/SVG/social-icons/linkedin/linkedin.svg';
import LinkedinActive from './assets/imgs/SVG/social-icons/linkedin/linkedin-active.svg';
import Email from './assets/imgs/SVG/social-icons/email/email.svg';
import EmailActive from './assets/imgs/SVG/social-icons/email/email-active.svg';
import ReturnTop from './assets/imgs/SVG/arrow-icons/returnTop.svg';
import ReturnTopActive from './assets/imgs/SVG/arrow-icons/returnTop-active.svg'
import { init } from 'emailjs-com';


AOS.init();

let isMobile = false;
let initialOffSet;

const handleResize = () => {
    isMobile = window.innerWidth <= 768;
    initialOffSet = window.innerHeight;
    console.log(initialOffSet);
}

window.onresize = handleResize();

let handleIconHover = (e) => {
    let icon = e.currentTarget.id;

    if(icon == "github-icon") {
        e.currentTarget.src = GithubActive;
    }
    else if(icon == "linkedin-icon") {
        e.currentTarget.src = LinkedinActive;
    }
    else if(icon == "email-icon") {
        e.currentTarget.src = EmailActive;
    }
    else if(icon == "return-top") {
        e.currentTarget.src = ReturnTopActive;
    }
    else if (icon == "nav-landing") {
        e.currentTarget.src = SiteHoverIcon;
    }
    else if (icon == "featured-github-icon") {
        e.currentTarget.src = GithubActive;
    }
    else if (icon == "modal-github-icon") {
        e.currentTarget.src = GithubAlt;
    }
}

let handleIconHoverOff = (e) => {
    let icon = e.currentTarget.id;

    if(icon == "github-icon") {
        e.currentTarget.src = Github;
    }
    else if(icon == "linkedin-icon") {
        e.currentTarget.src = Linkedin;
    }
    else if(icon == "email-icon") {
        e.currentTarget.src = Email;
    }
    else if(icon == "return-top") {
        e.currentTarget.src = ReturnTop;
    }
    else if (icon == "nav-landing") {
        e.currentTarget.src = SiteIcon;
    }
    else if (icon == "featured-github-icon") {
        e.currentTarget.src = Github;
    }
    else if (icon == "modal-github-icon") {
        e.currentTarget.src = Github;
    }
}

let headerOffSet;

let setHeaderOffSet = (value) => {
    headerOffSet = value;
}

let handleStickyHeader = (initialOffSet) => {
    let header = document.getElementById("header");
    let body = document.getElementById("body-content");
    if(window.pageYOffset >= initialOffSet) {
        header.classList.add("sticky");
        body.classList.add('sticky-body');
    } else {
        header.classList.remove("sticky");
        body.classList.remove('sticky-body');
    }
}

if(isMobile == false){
    window.onscroll = () => {
        handleStickyHeader(headerOffSet);
    }
}


const routes = (
    <BrowserRouter>
        <div>
            { isMobile &&
                <MobileMenu/> 
            }     
            <Landing/>
            { isMobile == false &&
                <Header
                    handleIconHover={handleIconHover} 
                    handleIconHoverOff={handleIconHoverOff}
                    setHeaderOffSet={setHeaderOffSet}
                    isMobile={isMobile}
                />
            }
            <Switch>
                <div id="body-content">
                    <Route
                        path="/" 
                        component={Home} 
                        exact={true}
                    />
                    <Route
                        path="/" 
                        render={
                            (props) => 
                                <ProjectList
                                handleIconHover={handleIconHover} 
                                handleIconHoverOff={handleIconHoverOff}
                                isMobile={isMobile}
                                />
                        }
                        exact={true}
                    />
                    { isMobile == false &&
                        <Route
                            path="/" 
                            render={
                                (props) => 
                                    <Cv/>
                            }
                            exact={true}
                        />
                    }
                    <Route
                    path="/" 
                    render={
                        (props) => 
                            <Contact 
                            handleIconHover={handleIconHover} 
                            handleIconHoverOff={handleIconHoverOff}
                            />
                    } 
                    exact={true}
                    />
                    <Route
                    path="/" 
                    render={
                        (props) => 
                            <Footer 
                            handleIconHover={handleIconHover} 
                            handleIconHoverOff={handleIconHoverOff}
                            />
                    } 
                    exact={true}
                    />
                </div>
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('root'));