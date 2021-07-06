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
                    <p>Welcome and thank you for visiting my page. I am a Full Stack Engineer from Brevard County, Florida, USA. I love to build and create anything from software to hardware. My favorite thing to do is chill! Feel free to contact me - to chat, say hello, or any questions.</p>
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