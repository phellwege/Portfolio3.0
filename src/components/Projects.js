import {Link } from 'react-router-dom';
import github from '../static/github.png';
import ecommerceProduct from '../static/CaptureHomeEcommercePrd.PNG';
import RockPaperScissors from '../static/CaptureHomeRockPaperScissors.PNG';
import SpaceTourism from '../static/CaptureSpaceTourism.PNG';
import img1 from '../static/giphyHomePage.gif';
import SW from '../static/giphySWHomePage.gif';
import TipMe from '../static/giphyTipCalc.gif';
const Projects = () => {
    return (
        <>
        <div className="page_wrap">
            <h2>Projects</h2>
            <div className="project_wrapper">
                <div className="project">
                    <h3>E-Commerce Product Page</h3>
                        <br/>
                    <img src={ecommerceProduct} alt="E-Commerce Product Page"/>
                        <br/>
                    <h4>Description</h4>
                    <p>
                        E-Commerce Product Page Component is a functional ReactJS page, with a lot of ternary statements, use of props, active states and state management. This was a coding challenge from frontEndMentor.io
                    </p>
                        <br/>
                        <br/>
                    <a href="https://phellwege.github.io/ecommerce-product-page-component/" target="_blank" rel="noreferrer">Deployed Site</a>
                        <br/>
                    <a href="https://github.com/phellwege/ecommerce-product-page-component" target="_blank" rel="noreferrer">
                        Github Repo
                            <br/>
                        <img id="github" src={github} alt="logo"/> 
                    </a>
                </div>
                <div className="project">
                    <h3>Rock-Paper-Scissors</h3>
                        <br/>
                    <img src={RockPaperScissors} alt="Rock-Paper-Scissors Home Page"/>
                        <br/>
                    <h4>Description</h4>
                    <p>
                        This is a Rock-Paper-Scissors game, that keeps track of your score through state management.
                    </p>
                        <br/>
                        <br/>
                    <a href="https://phellwege.github.io/RockPaperScissors/" target="_blank" rel="noreferrer">Deployed Site</a>
                        <br/>
                    <a href="https://github.com/phellwege/RockPaperScissors" target="_blank" rel="noreferrer">
                        Github Repo
                            <br/>
                        <img id="github" src={github} alt="logo"/> 
                    </a>
                </div>
                <div className="project">
                    <h3>Space Tourism</h3>
                        <br/>
                        <img src={SpaceTourism} alt="Space Tourism Home Page"/>
                        <br/>
                        <h4>Description</h4>
                        <p>
                            Space Tourism is a multi-page front end challenge. It's mobile friendly down to 375px wide and functions by indexing a JSON file.
                        </p>
                        <br/>
                        <br/>
                            <a href="https://phellwege.github.io/SpaceTourism/" target="_blank" rel="noreferrer">Deployed Site</a>
                            <br/>
                            <a href="https://github.com/phellwege/SpaceTourism" target="_blank" rel="noreferrer">
                                Github Repo
                                <br/>
                                <img id="github" src={github} alt="logo"/> 
                                </a>
                </div>
                <div className="project">
                    <h3>Tip Calculator</h3>
                    <br/>
                    <img src={TipMe} alt="Tip Calculator App"/>
                    <h4>Description</h4>
                    <p>
                        Tip Calculator is a front end mini project to keep my HTML, CSS, and JavaScript skills sharp. I followed a basic wireframe from frontendmentor, which I've found to be very helpful.
                    </p>
                        <br/>
                            <a href="https://phellwege.github.io/Tip_Calculator/" target="_blank" rel="noreferrer">Deployed Site</a>
                            <br/>
                            <a href="https://github.com/phellwege/Tip_Calculator" target="_blank" rel="noreferrer">
                                Github Repo
                                <br/>
                                <img id="github" src={github} alt="logo"/>
                                </a>
                </div>
                <div className="project">
                    <h3>Party Time</h3>
                    <br/>
                    <img src={img1} alt=""/>
                    <br/>
                    <h4>Description</h4>
                        <p>
                            Party Time is an ongoing Single Page Application (SPA) built from the ground up using ReactJS, CSS, and Javascript. It's a really fun and frustrating project to help me in my pursuit of constantly improving my code and knowledge of implementation.
                        </p>
                        <br/>
                            <Link to="/PartyTimeDetails">Details</Link>
                        <br/>
                            <a href="https://github.com/phellwege/ThePartyTime" target="_blank" rel="noreferrer">
                                Github Repo
                                <br/>
                                <img id="github" src={github} alt="logo"/> 
                            </a>
                </div>
                <div className="project">
                    <h3>Star Wars Homecoming</h3>
                        <br/>
                    <img src={SW} alt="Star Wars Homecoming Home Page"/>
                        <br/>
                    <h4>Description</h4>
                    <p>Star Wars HomeComing is a text based interactive game. Where you can create your own custom character, and travel the known galaxy. It's a lightweight Python application, that is easy to use with a nice UI.</p>
                        <br/>
                        <br/>
                        <Link to="/StarWarsDetails">Details</Link>
                        <br/>
                        <a href="http://ec2-3-14-141-156.us-east-2.compute.amazonaws.com/" target="_blank" rel="noreferrer">Deployed Site</a>
                        <br/>
                        <a href="https://github.com/bdsullivan123/homecoming" target="_blank" rel="noreferrer">
                            Github Repo
                            <br/>
                            <img id="github" src={github} alt="logo"/> 
                        </a>
                </div>
            </div>
        </div>
        </>
    )
}
export default Projects;