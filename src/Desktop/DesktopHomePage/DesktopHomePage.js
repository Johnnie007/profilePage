import './DesktopHomePage.scss'
import DesktopSkills from '../DesktopSkills/DesktopSkills'

function DesktopHomePage(){
    
    return(
        <div className='desktop-homepage-main'>
            <div className='desktop-homepage__header'>
                <div className='desktop-image'></div>
                <div className='desktop-homepage__content'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna fringilla urna porttitor rhoncus. Lacinia quis vel eros donec ac odio. Risus quis varius quam quisque id. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus in. Euismod in pellentesque massa placerat. Gravida dictum fusce ut placerat orci nulla pellentesque. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Quisque non tellus orci ac auctor augue mauris augue neque.</p>
                </div>
            </div>
            <DesktopSkills className='Skills'/>
        </div>
    )
}

export default DesktopHomePage;