import './Nav.scss'
import {Link} from 'react-router-dom';
function Nav(){
    return(
    <div className='desktop-nav-main'>
        <ul className='desktop-nav-ul'>
            <li className='desktop-nav-li'><Link to='/'><h1>Home</h1></Link></li>
            <li className='desktop-nav-li'><Link to='/portfolio'><h1>Portfolio</h1></Link></li>
        </ul>
    </div>
    )
}

export default Nav;