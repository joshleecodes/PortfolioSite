import React from 'react';
import Github from './../../../assets/imgs/SVG/social-icons/github/github.svg';

export default class ProjectItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false,
            projectOpen: false,
            closeBtnID: 'close-project__mobile-' + this.props.id
        }
        this.handleOpenProjectMobile = this.handleOpenProjectMobile.bind(this);
        this.handleCloseProjectMobile = this.handleCloseProjectMobile.bind(this);
    };

    handleOpenProjectMobile() {
        if(this.props.isTablet == true){
            document.getElementById('search-bar__mobile').style.display = "none";
            document.getElementById(this.state.closeBtnID).style.display = "flex";
            document.getElementById('results-wrapper').style.overflow ="hidden";
            this.setState({projectOpen: true});
        }
        
    }
    
    handleCloseProjectMobile() {
        document.getElementById('search-bar__mobile').style.display = "flex";
        document.getElementById(this.state.closeBtnID).style.display = "none";
        document.getElementById('results-wrapper').style.overflow ="scroll";
        this.setState({projectOpen: false});
    }
    
    handleProjectHoverOn = () => {
        let isHovered = true;
        this.setState({ isHovered });
    };
    
    handleProjectHoverOff = () => {
        let isHovered = false;
        this.setState({ isHovered });
    };

    componentWillUnmount() {
        document.body.style.overflow = "scroll";
    }
    
    render () {
        return (
            <div className="project-wrapper__container" id="project-wrapper" onMouseOver={this.handleProjectHoverOn} onMouseLeave={this.handleProjectHoverOff}>
                <a className="close-project__mobile" id={this.state.closeBtnID} onClick={this.handleCloseProjectMobile}>BACK</a>
                <div  className="project-wrapper" onClick={this.handleOpenProjectMobile}>
                    <img className="project__img" id="project__img"src={this.props.image}/>
                    <div className="project-title__wrapper">
                        <h3 className="project-title__mobile">{this.props.title}</h3>
                        <p className="project-tech__mobile">{this.props.techStack}</p>
                    </div>
                    <div className="project-overlay" id="project-overlay">
                        <div className="project-header-wrapper">
                            <div className='project-title-wrapper'>
                                {this.state.isHovered && <h3 className="project-title">{this.props.title}</h3>}
                                <a className="project-github-icon" href={this.props.githubLink} target="_blank">
                                    <img className="project-github-icon" id="modal-github-icon" src={Github}/>
                                </a>
                            </div>
                            {this.state.isHovered && <p className="project-tech">{this.props.techStack}</p>}
                        </div>
                        
                        {this.state.isHovered && <p className="project-text">{this.props.description}</p>}
                        
                    </div>
                    {this.state.projectOpen && 
                        <div className="modal-content">
                            <img className="modal-img" src={this.props.image}/>
                            <div className="modal-title-wrapper">
                                <h2 className="modal-title">{this.props.title}</h2>
                                    <a className="modal-github-icon" href={this.props.githubLink} target="_blank">
                                        <img className="modal-github-icon" id="modal-github-icon" src={Github}/>
                                    </a>
                                    <a className="modal-project-link" href={this.props.projectLink} target="_blank"/>
                            </div>
                            <div className="modal-info__wrapper">
                                <p className="modal-stack">{this.props.techStack}</p>
                            </div>
                            <div className="modal-body-wrapper">
                                    <p className="body-section-one">
                                        {this.props.description}
                                    </p>
                                    <p className="body-section-two">
                                        {this.props.descriptionTwo}
                                    </p>
                                </div>
                            
                        </div>
                    }
                </div>
                
            </div>
        );
    }
}