import './DesktopNav.scss'
import {Link} from 'react-router-dom';
import resume from '../../resume/johnnieResume.pdf'
function DesktopNav(){
    return(
    <aside>
        <div className='desktop-nav-main'>
            <ul className='desktop-nav-ul'>
                <li className='desktop-nav-li'><Link to='/'><h1>Home</h1></Link></li>
                <li className='desktop-nav-li'><Link to='/portfolio'><h1>Portfolio</h1></Link></li>
                <li className='desktop-nav-li'><a href='https://www.linkedin.com/in/johnnie-hicks-a3990320a/'><h1>LinkedIn</h1></a></li>
                <li className='desktop-nav-li'><a href='https://github.com/Johnnie007'><h1>GitHub</h1></a></li>
                <li className='desktop-nav-li'><Link to='/Resume'><h1>Resume</h1></Link></li>
                {/* <li className='desktop-nav-li'><a href={resume} download='JohnnieResume'><h1>Resume</h1></a></li> */}
                <li className='desktop-nav-li'><h1>Status</h1></li>
            </ul>
        </div>
    </aside>
    )
}

export default DesktopNav;