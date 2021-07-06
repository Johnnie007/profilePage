import "./Footer.scss";
import gmail from "../../Images/gmail.png";
import github from "../../Images/GitHub.png";
import linkedIn from "../../Images/linkedIn.png";

function Footer(){

    return(
        <div className="footer">
            <div className="footer-Icons">
                <a href="mailto:Johnnie.l.hick8@gmail.com"><img  className="footer-img left" src={gmail}/></a>
                <a href="https://github.com/Johnnie007"><img  className="footer-img middle" src={github}/></a>
                <a href="https://www.linkedin.com/in/johnnie-hicks-a3990320a/"><img  className="footer-img end" src={linkedIn}/></a>
            </div>
        </div>

    )
}

export default Footer;