import './DesktopHomePage.scss'
import DesktopSkills from '../DesktopSkills/DesktopSkills'

function DesktopHomePage(){
    
    return(
        <div className='desktop-homepage-main'>
            <div className='desktop-homepage__header'>
                <div className='desktop-image'></div>
                <div className='desktop-homepage__content'>
                    <p>Hey! My name is Johnnie, and thanks for checking out my section on the internet. I am a Full Stack Developer from Florida. I love to build things with my hands and solve problems. I have a 6-year-old boxer named Georgia and a 2-year-old son named Jackson. During the winter, I like to hike, read books, and travel. The rest of the year, I am chilling or playing chess! Feel Free to contact me at any time!</p>
                </div>
            </div>
            <DesktopSkills className='Skills'/>
        </div>
    )
}

export default DesktopHomePage;