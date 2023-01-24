import "./HomePage.css"
import avatar from "../assets/avatar-music.png"

function HomePage() {
    return (
        <div className="home center-page">
            <h1>Tuner App</h1>
            <div className="homePage center-page">
                <img src={avatar} alt="bitmoji" />
            </div>
            <p>Destiny J.</p>
            <p>FSW @Pursuit Jan. Twenty-Twenty-Three</p>
        </div>
    );
}

export default HomePage;