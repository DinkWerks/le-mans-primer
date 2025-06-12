import "./Home.css";
import LineUp from "../assets/HomeLineUp.jpg"

function Home() {
    return (
        <div className="flex">
            <div style={heroImageContainer}>
                <img src={LineUp} alt="All competing Le Mans cars lined up on the start grid."/>
            </div>
            <div style={homeContentStyle}>
                <div className="title-container">
                    <p className="audiowide-regular twenty-four">24</p>
                    <p className="audiowide-regular lemans">Hours of Le Mans</p>
                    <p className="year">2025</p>
                    <p className="tagline">The 93rd Running of Motorsport's Most Legendary Race</p>
                </div>
            </div>
        </div>
    );
}

export default Home;


const heroImageContainer = {
    maskImage: "linear-gradient(10deg,rgba(245, 245, 245, 0) 12%, " +
        "rgba(245, 245, 245, .3) 15%, " +
        "rgba(245, 245, 245, 1) 20%, " +
        "rgba(245, 245, 245, 1) 60%, " +
        "rgba(245, 245, 245, .6) 75%, " +
        "rgba(245, 245, 245, 0) 90%)"
}

const homeContentStyle = {
    margin: 'auto'
}
