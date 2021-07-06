import "./Main.scss";
import About from "./About/About";
import CurrentProject from "./CurrentProject/CurrentProject";
import Project from "./Project/Project";
import Header from "./Header/Header";
import Contact from "./Contact/Contact";


function Main(){

    return(
        <div className="all">
        {/* This is the NavBar Code */}
        <div className="header">
            <a className="color" href="#about">About</a>
            <a className="color" href="#currentProject">Current Project</a>
            <a className="color" href="#project">Projects</a>
            <a className="color" href="#contact">Contact</a>
        </div>


           <div className="about" id="about">
               <About/>
            </div>
            
            <div className="about-left" id="currentProject" >
                <CurrentProject/>
            </div>

            <div className="about" id="project"><Project /></div>

            <div className="about-left about-left__bottom" id="contact">
                <Contact/>
            </div>
            
        </div>
    )
}

export default Main;