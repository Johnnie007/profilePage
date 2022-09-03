import './LoadingAnimation.scss';

function LoadingAnimation(){
    return(
        <div className="loading-container">
            <div className="loading-container__ring"></div>
                <span className='loading-container__text'>Loading...</span>
        </div>
    )

}

export default LoadingAnimation;