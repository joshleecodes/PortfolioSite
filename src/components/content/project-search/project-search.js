import React from 'react';

import CloseMenuIcon from './../../../assets/imgs/SVG/menu-icons/cross.svg';

export default class ProjectSearch extends React.Component {
    constructor(props){
        super();
    }

    componentDidMount() {
        document.body.style.overflow = "hidden";
    }

    componentWillUnmount() {
        document.body.style.overflow = "scroll";
    }

    render() {
        return (
            <div className="projects-search__mobile">
                <div className="project-search__mobile-title__wrapper">
                    <a className="search-menu-close" onClick={this.props.handleCloseSearchMenu}>
                        <img
                            className="menu-icon"
                            src={CloseMenuIcon}
                        />
                    </a>
                        <h2 className="project-search__mobile-title">PROJECT HEAP</h2>                  
                    <form className="projects-content__heap__search-mobile">
                        <input
                            id="search-bar__mobile"
                            className="projects-content__heap__search-bar-mobile" 
                            placeholder="Enter Keyword"
                            autoComplete="off"
                            value={this.props.value}
                            onChange={this.props.handleSearch}
                        />
                    </form>
                </div>
                <div className="project-heap__mobile-results__wrapper" id="results-wrapper">
                    {this.props.projectList}
                </div>
            </div>
        )
    }
}