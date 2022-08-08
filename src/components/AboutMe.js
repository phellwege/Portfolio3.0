import "../Main.css"
import HeadShot from '../static/HeadShot.jpeg';

const AboutMe = () => {
    return (
        <>
        <div id="About" className="page_wrap">
            <h2>About Me</h2>
            {/* There should be a more professional headshot here */}
            <img src={HeadShot} alt="Selfie Pic" id="HeadShotPic"/>
            <br/>
            <h3>Interests</h3>
            <p>
                Hanging out with family, and anything creative. <br/>I really enjoy bringing my ideas to life, whether it's through art, coding, or tinkering around the house.
            </p>
            <br/>
            <p>I stumbled into software engineering somewhat by accident, but I couldn't be happier. I love using my creativity to solve complex problems, and have the freedom to make innovative changes. There's just something special about sitting down at your computer and making something from just your knowledge and a keyboard.
            </p>
            <br/>
                <h3>Location</h3>
                <p> Scenic <span id="boldMe">Boise, Idaho</span> I currently work remotely, but for the right position may even consider a move. 
                </p>
            <br />
                <p id="quote">
                    “The Purpose of software engineering is to control complexity, not to create it.”
                </p>
                <div id="line_break"></div>
                    <p>-- Pamela Have</p>
            </div>
        </>
    )
}
export default AboutMe;