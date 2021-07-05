import "./Footer.scss";
import gmail from "../../Images/gmail.png";
import github from "../../Images/GitHub.png";
import linkedIn from "../../Images/linkedIn.png";

function Footer(){

    return(
        <div className="footer">
            <a><img  className="footer-img left" src={gmail}/></a>
            <a><img  className="footer-img middle" src={github}/></a>
            <a><img  className="footer-img end" src={linkedIn}/></a>
        </div>
    )
}

export default Footer;