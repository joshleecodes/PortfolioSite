import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import ProjectItem from '../project-item/Project-item';
import FeaturedProject from '../featured-project/Featured-project';
import ProjectData from './../../../assets/json/projects.json';
import ProjectSearch from './../project-search/project-search';
import CloseIcon from './../../../assets/imgs/SVG/menu-icons/cross.svg'
import GithubIcon from './../../../assets/imgs/SVG/social-icons/github/github.svg'
import GithubActiveIcon from './../../../assets/imgs/SVG/social-icons/github/github-alt.svg'

export default class ProjectList extends React.Component { 
    constructor(){
        super();
        this.state = {
            projectData: [],
            featuredProject: [],
            projectList: [],
            isEmpty: false,
            searchValue: "",
            searchOpen: false,
            desktopProjectOpen: false,
            projectOpenID: 0
        }
        this.serveProjectHeap = this.serveProjectHeap.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleCloseSearchMenu = this.handleCloseSearchMenu.bind(this);
        this.handleOpenProjectDesktop = this.handleOpenProjectDesktop.bind(this);
        this.handleCloseProjectDesktop = this.handleCloseProjectDesktop.bind(this);
    }

    componentDidMount() {
        let featuredProject = [];
        let projectData = ProjectData.projects.map((project, key) => {
            let projectItem = 
            <ProjectItem
                key={project.id}
                id={project.id}
                title={project.title}
                githubLink={project.githublink}
                projectLink={project.projectlink}
                techStack={project.techstack.join('/')}
                image={project.image}
                description={project.description} 
                descriptionTwo={project.descriptionTwo}
                searchTerms={project.searchTerms}
                handleIconHover={this.props.handleIconHover} 
                handleIconHoverOff={this.props.handleIconHoverOff}
                isTablet={this.props.isTablet}
                handleOpenProjectDesktop={this.handleOpenProjectDesktop}
                handleCloseProjectDesktop={this.handleCloseProjectDesktop}
            />
            if(project.featured === "true") {
                let tempfeaturedProject = 
                    <FeaturedProject
                        key={project.id}
                        title={project.title}
                        githubLink={project.githublink}
                        projectLink={project.projectlink}
                        techStack={project.techstack.join('/')}
                        image={project.image}
                        description={project.description}
                        descriptionTwo={project.descriptionTwo}
                        handleIconHover={this.props.handleIconHover} 
                        handleIconHoverOff={this.props.handleIconHoverOff}
                    />
                featuredProject.push(tempfeaturedProject);
            }
            return projectItem;
        }) 
        this.setState({featuredProject, projectData, projectList: projectData});
    }
    
    handleSearch(e){
        this.setState({searchValue: e.target.value.toLowerCase()}, this.serveProjectHeap)
    }

    handleCloseSearchMenu(){
        this.setState({searchOpen: false});
    }

    handleOpenProjectDesktop(id){
        this.setState({projectOpenID: id});
        document.body.classList.add('modal-open');
        this.setState({ desktopProjectOpen: true});
        console.log(this.state.projectList[this.state.projectOpenID].props)
    }

    handleCloseProjectDesktop(){
        document.body.classList.remove('modal-open');
        this.setState({ desktopProjectOpen: false});
    }

    serveProjectHeap(){
        const searchBorder = document.getElementById("search-bar");
        searchBorder.classList.remove('not-found');
        let projectList = [];
        let isEmpty = false;
        let data = this.state.projectData;
        

        for(let j=0; j<data.length; j++) {
            let searchTermArray = Array.from(data[j].props.searchTerms);
            for(let i=0; i<searchTermArray.length; i++) {
                if(data[j].props.searchTerms[i].includes(this.state.searchValue)) {
                    if(!projectList.includes(data[j])){
                        projectList.push(data[j]);
                    }
                }
            }          
        }
        if(projectList.includes(undefined) || projectList.length == 0) {
            searchBorder.classList.add('not-found');
            isEmpty = true;
        }
        this.setState({isEmpty});
        this.setState({projectList});
    }


    render() {
        const leftArrow = (
            <div className="arrow__wrapper">
                <p className="arrow__text">&lt;</p>
            </div>
        );
        
        const leftArrowDisabled = (
            <div className="arrow-disabled__wrapper">
                <p className="arrow-disabled__text">&lt;</p>
            </div>
        );

        const rightArrow = (
            <div className="arrow__wrapper">
                <p className="arrow__text">&gt;</p>
            </div>           
        );

        const rightArrowDisabled = (
            <div className="arrow-disabled__wrapper">
                <p className="arrow-disabled__text">&gt;</p>
            </div>
        );
        
        return (
            <div id="projects-content" className="projects-section">
                    <div className="projects-content__featured" data-aos="fade-right" data-aos-duration="1200" data-aos-anchor-placement="top-center" data-aos-once="true">
                        {this.state.featuredProject}
                    </div>
                    
                    <a className="projects-content__mobile-search-button" onClick={()=> this.setState({searchOpen: true})} data-aos="fade-left" data-aos-duration="1200" data-aos-anchor-placement="#projects-section" data-aos-once="true">PROJECT HEAP</a>
                    { this.state.searchOpen &&
                            <ProjectSearch
                            handleCloseSearchMenu={this.handleCloseSearchMenu}
                            handleSearch={this.handleSearch}
                            value={this.state.value}
                            projectList={this.state.projectList}
                            />
                    }
                <div className="projects-content__heap" data-aos="fade-left" data-aos-duration="1200" data-aos-anchor-placement="#projects-section" data-aos-once="true">
                    <div className="projects-content__heap__title-wrapper">
                        <h2 className="projects-content__heap__title">PROJECT HEAP</h2> 
                        <form className="projects-content__heap__search-form">
                            <input
                                id="search-bar"
                                className="projects-content__heap__search-bar" 
                                placeholder="Search here"
                                autoComplete="off"
                                value={this.state.value}
                                onChange={this.handleSearch}
                            />
                        </form>
                    </div>
                    {this.state.isEmpty ?
                        <div className="search-bar__feedback__wrapper"> 
                            <h3 className="search-bar__feedback">No matches found.</h3>
                        </div>
                        : 
                        <div className="carousel__wrapper">
                            <div className="carousel"> 
                                <Carousel
                                    slides={this.state.projectList}
                                    slidesPerScroll="3"
                                    slidesPerPage="3"
                                    arrowLeft={leftArrow}
                                    arrowLeftDisabled={leftArrowDisabled}
                                    arrowRight={rightArrow}
                                    arrowRightDisabled={rightArrowDisabled}
                                    addArrowClickHandler
                                />
                            </div>
                        </div>
                    }
                </div>
                {
                this.state.desktopProjectOpen &&
                    <div className="modal-wrapper__desktop">
                        <div className="modal-content__desktop">
                            <a className="modal-close__desktop" onClick={this.handleCloseProjectDesktop}>
                                <img 
                                    className="modal-close-icon__desktop"
                                    src={CloseIcon}
                                />
                            </a>
                            <div className="modal-img-wrapper__desktop">
                                <img className="modal-img__desktop" src={this.state.projectList[this.state.projectOpenID].props.image}/>
                            </div>
                            <div className="modal-title-wrapper__desktop">
                                <h2 className="modal-title__desktop">{this.state.projectList[this.state.projectOpenID].props.title}</h2>
                                <p className="modal-stack__desktop">{this.state.projectList[this.state.projectOpenID].props.techStack}</p>
                            </div>
                            <div className="modal-body-wrapper__desktop">
                                <p className="body-section-one__desktop">
                                    {this.state.projectList[this.state.projectOpenID].props.description}
                                </p>
                                <p className="body-section-two__desktop">
                                    {this.state.projectList[this.state.projectOpenID].props.descriptionTwo}
                                </p>
                            </div>
                            <div className="github-wrapper__desktop">
                                <a className="modal-github-icon__desktop" href={this.state.projectList[this.state.projectOpenID].props.githubLink} target="_blank">
                                    <img className="modal-github-icon__desktop" id="modal-github-icon" src={GithubIcon} onMouseOver={this.props.handleIconHover} onMouseLeave={this.props.handleIconHoverOff} />
                                </a>
                                <a className="modal-project-link__desktop" href={this.state.projectList[this.state.projectOpenID].props.projectLink} target="_blank">
                                    <h3 className="modal-project-link__desktop">{this.state.projectList[this.state.projectOpenID].props.projectLink}</h3>
                                </a>  
                            </div>
                        </div>
                    </div> 
                }
            </div>
        );
    }
}