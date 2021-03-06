import './DesktopNav.scss'
import {NavLink} from 'react-router-dom';
import resume from '../../resume/johnnieResume.pdf'
function DesktopNav(){
    return(
    <aside>
        <div className='desktop-nav-main'>
            <ul className='desktop-nav-ul'>
                <li className='desktop-nav-li'><NavLink className='text-color' activeClassName='text' to='/' exact><h1>Home.</h1></NavLink></li>
                <li className='desktop-nav-li'><NavLink className='text-color' activeClassName='text' to='/portfolio'><h1>Portfolio.</h1></NavLink></li>
                <li className='desktop-nav-li'><a  className='text-color' target="_blank" href='https://www.linkedin.com/in/johnnie-hicks-a3990320a/'><h1>LinkedIn.</h1></a></li>
                <li className='desktop-nav-li'><a className='text-color' target="_blank" href='https://github.com/Johnnie007'><h1>GitHub.</h1></a></li>
                <li className='desktop-nav-li'><NavLink className='text-color' activeClassName='text' to='/Resume'><h1>Resume.</h1></NavLink></li>
            </ul>
        </div>
    </aside>
    )
}

export default DesktopNav;