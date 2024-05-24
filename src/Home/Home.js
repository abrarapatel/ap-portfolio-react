import LandBack from '../assets/images/landing-back.png';
import './home.css';

function Home() {
    return (
        <div className="Home d-flex jcc aic h-100">
            <div className="home-container">
                <div className="home-landing-container">
                    <div className="landing-name-title text-center w-100">
                        ABRAR <span className='font-style-italic'>PATEL</span>
                        <div className='landing-passion font-largest'>Web Developer, Graphics Designer & Conceptual Artist</div>
                    </div>
                    <div className="landing-backgroud">
                        <img src={LandBack} alt="Landing Container Background" className='user-select-none' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;