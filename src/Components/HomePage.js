import "./HomePage.css"
import avatar from "../assets/avatar-music.png"

function HomePage() {
    return (
        <div className="home center-page">
            <h1>Tuner App</h1>
            <div className="homePage center-page background-image">
                <img src={avatar} alt="bitmoji" />
            </div>
            <p>Destiny J.</p>
            <p>FSW @Pursuit</p> 
            <p>Jan.Twenty-Twenty-Three</p>
        </div>
    );
}

export default HomePage;