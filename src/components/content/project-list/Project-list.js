import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import ProjectItem from '../project-item/Project-item';
import FeaturedProject from '../featured-project/Featured-project';
import ProjectData from './../../../assets/json/projects.json';
import ProjectSearch from './../project-search/project-search';

export default class ProjectList extends React.Component { 
    constructor(){
        super();
        this.state = {
            projectData: [],
            featuredProject: [],
            projectList: [],
            isEmpty: false,
            searchValue: "",
            searchOpen: false
        }
        this.serveProjectHeap = this.serveProjectHeap.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleCloseSearchMenu = this.handleCloseSearchMenu.bind(this);
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
                techStack={project.techstack.join('/')}
                image={project.image}
                description={project.description} 
                descriptionTwo={project.descriptionTwo}
                handleIconHover={this.props.handleIconHover} 
                handleIconHoverOff={this.props.handleIconHoverOff}
                isMobile={this.props.isMobile}
            />
            if(project.featured === "true") {
                let tempfeaturedProject = 
                    <FeaturedProject
                        key={project.id}
                        title={project.title}
                        githubLink={project.githublink}
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
        this.setState({searchValue: e.target.value}, this.serveProjectHeap)
    }

    handleCloseSearchMenu(){
        this.setState({searchOpen: false});
    }

    serveProjectHeap(){
        const searchBorder = document.getElementById("search-bar");
        searchBorder.classList.remove('not-found');
        let projectList = [];
        let isEmpty = false;
        let data = this.state.projectData;

        for(let j=0; j<data.length; j++) {
            if(data[j].props.title.includes(this.state.searchValue)) {
                projectList.push(data[j]);
            }
            else {
                let techStackArray = data[j].props.techStack.split("/");
                for(let i=0; i<techStackArray.length; i++) {
                    if(data[j].props.techStack.split("/")[i].includes(this.state.searchValue)) {
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
        console.log(this.state.projectList);
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
                { this.props.isMobile == false &&
                    <div className="projects-content__featured">
                        {this.state.featuredProject}
                    </div>
                }
            
                <div className="projects-content__heap__title-wrapper">
                        <h2 className="projects-content__heap__title">PROJECT HEAP</h2>
                </div>
                <a className="projects-content__mobile-search-button" onClick={()=> this.setState({searchOpen: true})}>VIEW PROJECTS</a>
                { this.state.searchOpen &&
                    <ProjectSearch
                    handleCloseSearchMenu={this.handleCloseSearchMenu}
                    handleSearch={this.handleSearch}
                    value={this.state.value}
                    projectList={this.state.projectList}
                    />
                }
                { this.props.isMobile &&
                    <div className="projects-content__featured">
                        {this.state.featuredProject}
                    </div>
                }
                
                <div className="projects-content__heap">
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
                        {this.state.isEmpty ?
                            <div className="search-bar__feedback__wrapper"> 
                                <h3 className="search-bar__feedback">No matches found.</h3>
                            </div>
                        : 
                        <div className="carousel__wrapper">
                            <div className="carousel"> 
                                <Carousel
                                    slides={this.state.projectList}
                                    slidesPerScroll="2"
                                    slidesPerPage="2"
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
            </div>
        );
    }
}