import "./About.scss"

function About(){
    
    return(
        <div className="main-card">
            
            <div className="main-card__header">
                <h1>About Me</h1>
            </div>

        <div className="main-card__info">
            {/* card header */}
            <div className="main-card__title">
                <div className="main-card__img"></div>
            <div className="main-card__name">
                <h2>Johnnie Hicks</h2>
                <h3>Full Stack Engineer</h3>
            </div>
            </div>
            {/* Card text */}
            <div className="main-card__text">
                <div className="main-card__text--slogan">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit consectetur sodales. Integer sit amet imperdiet quam. Proin consectetur rhoncus diam,</p>
                </div>
                
                
                <div className="main-card__hobbies">
                 <div className="main-card__hobbies--title"><h3>Hobbies:</h3></div>
                    <div className="main-card__hobbies--li">
                        <ul>
                            <li>Hiking</li>
                            <li>Listening to Music</li>
                            <li>Playing Chess</li>
                        </ul>
                        <ul>
                            <li>Reading</li>
                            <li>Coding</li>
                            <li>Fixing anything</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
        </div>
    )
    }

    export default About;