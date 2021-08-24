import './Portfolio.scss'

function Portfolio(){
    return(
        <div className='portfolio-main'>
            <div className='portfolio-header'>
                <h1>Portfolio</h1>
            </div>

            <div className='portfolio-card'>
                <div className="portfolio-card__header">
                    <h1>Mosaic</h1>
                    <h1>Me</h1>
                </div>
                
                <div className='portfolio-card__type'>
                    <h4>Frontend Project</h4>
                </div>
                
                <div className='portfolio-card__languages'>
                    <ul className='portfolio-card__ul'>
                        <li className='portfolio-card__li'>Javascript</li>
                        <li className='portfolio-card__li'>React.JS</li>
                        <li className='portfolio-card__li'>CSS</li>
                        <li className='portfolio-card__li'>REST API</li>
                        <li className='portfolio-card__li'>HTML</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;