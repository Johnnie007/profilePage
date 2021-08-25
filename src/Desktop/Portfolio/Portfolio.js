import './Portfolio.scss'
function Portfolio(){

    return(
        <div className='desktop-portfolio-main'>
            <div className='desktop-portfolio-card'>
            <a href="https://johnnie007.github.io/mosaic-me/#/">
                <div className='desktop-portfolio-header'>
                    <h1>Mosaic</h1>
                    <h1>Me</h1>
                </div>
                <div className='desktop-portfolio-title'>
                    <h4>Frontend Project</h4>
                </div>
                <div className="desktop-portfolio-build">
                    <ul className="desktop-portfolio-build__ul">
                        <li className="desktop-portfolio-build__li">Javascript</li>
                        <li className="desktop-portfolio-build__li">React.JS</li>
                        <li className="desktop-portfolio-build__li">CSS</li>
                    </ul>
                    <ul className="desktop-portfolio-build__ul">
                        <li className="desktop-portfolio-build__li">RESTFUL API</li>
                        <li className="desktop-portfolio-build__li">HTML</li>
                    </ul>
                </div></a>
            </div>
            <div className='desktop-portfolio-card'>
                <div className='desktop-portfolio-header'>
                    <h1>RESTFUL</h1>
                    <h1>Country</h1>
                    <h1>API</h1>
                </div>
                <div className='desktop-portfolio-title'>
                    <h4>Backend Project</h4>
                </div>
                <div className="desktop-portfolio-build">
                    <ul className="desktop-portfolio-build__ul">
                        <li className="desktop-portfolio-build__li">Javascript</li>
                        <li className="desktop-portfolio-build__li">Express.JS</li>
                        <li className="desktop-portfolio-build__li">CSS</li>
                    </ul>
                    <ul className="desktop-portfolio-build__ul">
                        <li className="desktop-portfolio-build__li">Node.JS</li>
                        <li className="desktop-portfolio-build__li">HTML</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;