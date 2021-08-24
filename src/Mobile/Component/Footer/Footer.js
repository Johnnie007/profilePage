import './Footer.scss'
import GitHub from '../../../Images/GitHub.png';
import Gmail from '../../../Images/gmail.png';
import LinkedIn from '../../../Images/linkedIn.png'

function Footer(){
    return(
        <div className="footer-main">
            <div className='footer-icon'>
                <a href="https://github.com/Johnnie007" ><img className='github-icon' src={GitHub} alt='github icon'/></a>
            </div>
            <div className='footer-icon'>
                <a href="mailto:Johnnie.l.hick8@gmail.com"><img className='gmail-icon' src={Gmail} alt='gmail icon'/></a>
            </div>
            <div className='footer-icon'>
               <a href="https://www.linkedin.com/in/johnnie-hicks-a3990320a/" ><img className='linkedin-icon' src={LinkedIn} alt='linkedin icon'/></a>
            </div>
        </div>
    )
}

export default Footer;