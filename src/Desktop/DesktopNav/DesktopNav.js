import './DesktopNav.scss'
import {NavLink} from 'react-router-dom';
import resume from '../../resume/JohnnieResume.pdf';

function DesktopNav(){
    return(
    <aside>
        <div className='desktop-nav-main'>
            <ul className='desktop-nav-ul'>
            <NavLink className='text-color' activeClassName='text' to='/' exact><li className='desktop-nav-li'><h1>Home.</h1></li></NavLink>
            <NavLink className='text-color' activeClassName='text' to='/portfolio'><li className='desktop-nav-li'><h1>Portfolio.</h1></li></NavLink>
                <li className='desktop-nav-li'><a  className='text-color' target="_blank" href='https://www.linkedin.com/in/johnnie-hicks-a3990320a/'><h1>LinkedIn.</h1></a></li>
                <li className='desktop-nav-li'><a className='text-color' target="_blank" href='https://github.com/Johnnie007'><h1>GitHub.</h1></a></li>
                <li className='desktop-nav-li desktop-nav-li__sm'><a className='text-color' href={resume} download='JohnnieResume'><h1>Download Resume.</h1></a></li>
            </ul>
        </div>
    </aside>
    )
}

export default DesktopNav;