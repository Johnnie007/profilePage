import "./CurrentProject.scss"

function CurrentProject(){
    
    return(
        <div className="project">
            
            <div className="project__header">
                <h1>Current Project</h1>
            </div>
            
            <div className="project-card">
                
                <div className="project-card__title">
                    <h2>Untitled Backend</h2>
                </div>

                <div className="project-card__progress">
                    <h3>Progress Bar</h3>
                </div>

                <div className="project-card__progress-bar">
                    <div className="bar">
                        <div className="line"/>
                        <div className="diamond"/>
                        <div className="line"/>
                        <div className="diamond"/>
                        <div className="line"/>
                        <div className="diamond"/>
                        <div className="line"/>
                        <div className="diamond"/>
                    </div>
                </div>

                <div className="percentage">
                    <h4>20%</h4>
                </div>
            </div>
            
        </div>
    )
}

export default CurrentProject;