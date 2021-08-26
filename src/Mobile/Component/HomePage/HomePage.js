import './HomePage.scss';

function HomePage(){

    return(
        <div className="homepage-main">
            <div className='homepage__header'>
                <h1>Johnnie Hick</h1>
                <h4>FullStack Engineer</h4>
            </div>
            <div className='image'>
                <div className='homepage__image'></div>
            </div>
            <div className='homepage__content'>
                <p>Hey! My name is Johnnie, and thanks for checking out my section on the internet. I am a Full Stack Developer from Florida. I love to build things with my hands and solve problems. I have a 6-year-old boxer named Georgia and a 2-year-old son named Jackson. I like to hike, read books, play chess, travel, and chill! </p>
            </div>
        </div>
    )
}

export default HomePage;