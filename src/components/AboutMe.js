import "../Main.css"
import HeadShot from '../static/HeadShot.jpeg';

const AboutMe = () => {
    return (
        <>
        <div id="About" className="page_wrap">
            <h2>About</h2>
            {/* There should be a more professional headshot here */}
            <img src={HeadShot} alt="Selfie Pic" id="HeadShotPic"/>
            <br/>
            <h3>Interests</h3>
            <p>
                Things I like include: Hanging out with the family, and anything creative. I really enjoy bringing my ideas to life, whether it's through coding, tinkering around the house, or just playing some games.
                <br/>
                Speaking of Games... Strategy games, and RPG's are my bread and butter.
            </p>
            {/* take a look at this and come back to it, should be like an interests section */}
            <br/>
            <h3>Why Coding</h3>
            <p>I stumbled into software engineering somewhat by accident, but I couldn't be happier. I love using my creativity to solve complicated problems, and having the freedom to make innovative changes. There's just something magical about sitting down at your computer and making something from just your knowledge and a keyboard. I always feel like a wizard at the end of the day, it's great.
            </p>
            <br/>
                <h3>Where am I located?</h3>
                <p> Scenic <span id="boldMe">Boise, Idaho</span> I would also be more than happy to work remotely, or for the right position even consider a move. 
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