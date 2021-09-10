import React from 'react';
import GitHubIcon from './../../../assets/imgs/SVG/social-icons/github/github.svg';

export default class FeaturedProject extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="featured-projects_container">
                <div className="projects-content__featured__title-wrapper">
                        <h2 className="projects-content__featured__title">FEATURED PROJECT</h2>
                </div>
                <div className="featured-projects__wrapper">
                    <img className="featured-project__image" src={this.props.image}/>
                    <div className="feature-project__description-wrapper">
                        <div className="featured-project__header-wrapper">
                            <div className="featured-project__header-title-wrapper">
                                <h3 className="featured-project__body-title">{this.props.title}</h3>
                                <a className="featured-github-icon__wrapper" href={this.props.githubLink} target="_blank">
                                    <img
                                        className="github-icon"
                                        id="featured-github-icon"
                                        src={GitHubIcon}
                                        onMouseOver={this.props.handleIconHover}
                                        onMouseLeave={this.props.handleIconHoverOff}
                                    />
                                </a>
                            </div>
                            <h4 className="featured-project__techstack">{this.props.techStack}</h4>
                        </div>
                        <div className="featured-project__body-wrapper">
                            <div className="featured-project__body-text-wrapper">
                                <p className="featured-project__body-text-one">{this.props.description}</p>
                                <p className="featured-project__body-text-two">{this.props.descriptionTwo}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="featured-projects__wrapper-mobile">
                    <img className="featured-projects__mobile-image" src={this.props.image}/>
                    <div className="featured-projects__mobile-title-wrapper">
                        <a href={this.props.githubLink} target="_blank">
                            <img
                                className="github-icon__mobile"
                                id="featured-github-icon"
                                src={GitHubIcon}
                                onMouseOver={this.props.handleIconHover}
                                onMouseLeave={this.props.handleIconHoverOff}
                            />
                        </a>
                        <div className="featured-projects__mobile-title">{this.props.title}</div>  
                    </div>
                    <p className="featured-project__body-text__mobile">{this.props.description}</p>
                </div>
            </div>
        );
    }
}

