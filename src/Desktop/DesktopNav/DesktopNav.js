import './DesktopNav.scss'
import {NavLink} from 'react-router-dom';
<<<<<<< HEAD
import resume from '../../assets/JohnnieResume.pdf';
=======
import resume from '../../resume/johnnieResume.pdf';
>>>>>>> 92ec9cefc83c7b6bdac322b76f96f4142e7afc63

function DesktopNav(){
    return(
    <aside>
        <div className='desktop-nav-main'>
            <ul className='desktop-nav-ul'>
                <li className='desktop-nav-li'><NavLink className='text-color' activeClassName='text' to='/' exact><h1>Home.</h1></NavLink></li>
                <li className='desktop-nav-li'><NavLink className='text-color' activeClassName='text' to='/portfolio'><h1>Portfolio.</h1></NavLink></li>
                <li className='desktop-nav-li'><a  className='text-color' target="_blank" href='https://www.linkedin.com/in/johnnie-hicks-a3990320a/'><h1>LinkedIn.</h1></a></li>
                <li className='desktop-nav-li'><a className='text-color' target="_blank" href='https://github.com/Johnnie007'><h1>GitHub.</h1></a></li>
                <li className='desktop-nav-li'><a className='text-color' href={resume} download='JohnnieResume'><h1>Download Resume.</h1></a></li>
            </ul>
        </div>
    </aside>
    )
}

export default DesktopNav;