import './DesktopSkills.scss';

function DesktopSkills(){

    return(
        <div className='desktop-skills-main'>
            <div>
                <h1>Skills</h1>
            </div>
            <div className='desktop-skills-area'>
                <ul className='desktop-skills__ul'>
                    <li className='desktop-skills__li'>JavaScript</li>
                    <li className='desktop-skills__li'>Node.Js</li>
                    <li className='desktop-skills__li'>Express.Js</li>
                </ul>
                <ul className='desktop-skills__ul'>
                    <li className='desktop-skills__li'>React.Js</li>
                    <li className='desktop-skills__li'>HTML</li>
                    <li className='desktop-skills__li'>CSS</li>
                </ul>
                <ul className='desktop-skills__ul'>
                    <li className='desktop-skills__li'>MySQL</li>
                    <li className='desktop-skills__li'>APIs</li>
                    <li className='desktop-skills__li'>DOM</li>
                </ul>
                <ul className='desktop-skills__ul'>
                    <li className='desktop-skills__li'>GitHub</li>
                    <li className='desktop-skills__li'>Heroku</li>
                    <li className='desktop-skills__li'>OAuth</li>
                </ul>
            </div>
        </div>
    )
}

export default DesktopSkills;