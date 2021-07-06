import "./CurrentProject.scss"

function CurrentProject(){
    
    return(
        <div className="project">
            
            <div className="project__header">
                <h1>Current Project</h1>
            </div>
            
            <div className="project-card">
                
                <div className="project-card__title">
                    <h2>Building a Server</h2>
                </div>

                <div className="project-card__progress">
                    <h3> Current Progress</h3>
                    <div className="percentage">
                    <h4>20%</h4>
                </div>
                </div>

                <div className="project-card__progress-bar">
                    <div className="bar">
                        <div className="line"/>
                        <div className="diamond"/>
                        {/* <div className="line"/>
                        <div className="diamond"/>
                        <div className="line"/>
                        <div className="diamond"/>
                        <div className="line"/>
                        <div className="diamond"/>
                        <div className="line"/>
                        <div className="diamond"/> */}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default CurrentProject;