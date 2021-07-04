import "./Main.scss";
import About from "./About/About";
import CurrentProject from "./CurrentProject/CurrentProject";
import Project from "./Project/Project";

function Main(){

    return(
        <div className="all">
            <About/>
            <CurrentProject/>
            <Project/>
        </div>
    )
}

export default Main;