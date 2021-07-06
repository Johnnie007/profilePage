import "./Project.scss";
import mosaicme from "../../Images/MOSAIC-ME.png";

function Project(){
    return(
    <div className="projects">
        
        <div className="projects__header">
            <h1>Completed Projects</h1>
        </div>

        <div className="projects-card">
            <div className="projects-card__content">

                <a href="https://johnnie007.github.io/mosaic-me/#/">
                    <img className="projects-card__img" src={mosaicme}/>
                </a>
                <h5>Mosaic Me</h5>
                
            </div>
        </div>

    </div>
    )
}

export default Project;