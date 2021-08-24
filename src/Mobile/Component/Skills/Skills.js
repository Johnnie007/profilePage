import "./Skills.scss"

function Skills(){

    return(
       <div className="skills-main">
           <div className="skills__header">
               <h1>Skills</h1>
           </div>
           <div className="skills-content">
                <ul className="skills-content__ul">
                    <li className="skills-content__li">Javascript</li>
                    <li className="skills-content__li">React.JS</li>
                    <li className="skills-content__li">MySQL</li>
                    <li className="skills-content__li">GitHub</li>
                </ul>
                <ul className="skills-content__ul">
                    <li className="skills-content__li">Node.JS</li>
                    <li className="skills-content__li">HTML</li>
                    <li className="skills-content__li">CSS</li>
                    <li className="skills-content__li">Express.JS</li>
                </ul>
                <ul className="skills-content__ul">
                    <li className="skills-content__li">APIs</li>
                    <li className="skills-content__li">Heroku</li>
                    <li className="skills-content__li">OAuth</li>
                    <li className="skills-content__li">DOM</li>
                </ul>
           </div>
       </div>
    )
}

export default Skills