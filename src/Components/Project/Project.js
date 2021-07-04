import "./Project.scss";

function Project(){
    return(
    <div className="projects">
        
        <div className="projects__header">
            <h1>Projects</h1>
        </div>

        <div className="projects-card">
            <div className="projects-card__content">
                <img className="projects-card__img" src="https://via.placeholder.com/700"/>
                <h5>Mosaic Me</h5>
                
            </div>
        </div>

    </div>
    )
}

export default Project;