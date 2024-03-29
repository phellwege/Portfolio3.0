import {Link } from 'react-router-dom';
import github from '../static/github.png';
import ecommerceProduct from '../static/CaptureHomeEcommercePrd.PNG';
import RockPaperScissors from '../static/CaptureHomeRockPaperScissors.PNG';
import SpaceTourism from '../static/CaptureSpaceTourism.PNG';
import img1 from '../static/giphyHomePage.gif';
import SW from '../static/giphySWHomePage.gif';
import TipMe from '../static/giphyTipCalc.gif';
import CountHome from '../static/CaptureCountDown.PNG'
const Projects = () => {
    return (
        <>
        <div className="page_wrap" id='Projects'>
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
                    <div className='ProjDesc'>
                        <a href="https://phellwege.github.io/ecommerce-product-page-component/" target="_blank" rel="noreferrer">Deployed Site</a>
                        <a href="https://github.com/phellwege/ecommerce-product-page-component" target="_blank" rel="noreferrer">
                            Github Repo
                                <br/>
                            <img id="github" src={github} alt="logo"/> 
                        </a>
                    </div>
                </div>
                <div className="project">
                    <h3>Rock-Paper-Scissors</h3>
                        <br/>
                    <img src={RockPaperScissors} alt="Rock-Paper-Scissors Home Page"/>
                        <br/>
                    <h4>Description</h4>
                    <p>
                        Rock-Paper-Scissors is a simple game that keeps track of your score through state management. I designed the architecture to be as smooth as possible without the need for any page changes.
                    </p>
                    <div className="ProjDesc">
                        <a href="https://phellwege.github.io/RockPaperScissors/" target="_blank" rel="noreferrer">Deployed Site</a>
                        <a href="https://github.com/phellwege/RockPaperScissors" target="_blank" rel="noreferrer">
                            Github Repo
                                <br/>
                            <img id="github" src={github} alt="logo"/> 
                        </a>
                    </div>
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
                            <div className ='ProjDesc'>
                                <a href="https://phellwege.github.io/SpaceTourism/" target="_blank" rel="noreferrer">Deployed Site</a>
                                <a href="https://github.com/phellwege/SpaceTourism" target="_blank" rel="noreferrer">
                                    Github Repo
                                    <br/>
                                    <img id="github" src={github} alt="logo"/> 
                                </a>
                            </div>
                </div>
                <div className="project">
                    <h3>Party Time</h3>
                    <br/>
                    <img src={img1} alt=""/>
                    <br/>
                    <h4>Description</h4>
                        <p>
                            Party Time is an ongoing single page application built from the ground up using ReactJS, CSS, and Javascript. It's been a really fun and frustrating project to help me in my pursuit of constantly improving my code and knowledge of implementation.
                        </p>
                            <div className="ProjDesc">
                                <a href="https://phellwege.github.io/ThePartyTime/" target="_blank" rel="noreferrer">Deployed Site</a>
                                <a href="https://github.com/phellwege/ThePartyTime" target="_blank" rel="noreferrer">
                                    Github Repo
                                    <br/>
                                    <img id="github" src={github} alt="logo"/> 
                                </a>
                            </div>
                </div>
                <div className="project">
                    <h3>Countdown Timer</h3>
                    <br/>
                    <img src={CountHome} alt="" />
                    <br/>
                    <br/>
                    <br/>
                    <h4>Description</h4>
                        <p>
                            Countdown timer was a quick challenge in order to build a really good looking countdown component, that can then be integrated into other projects.
                        </p>
                            <div className="ProjDesc">
                                <a href="https://phellwege.github.io/countdown/" target="_blank" rel="noreferrer">Deployed Site</a>
                                <a href="https://github.com/phellwege/countdown" target="_blank" rel="noreferrer">
                                    Github Repo
                                    <br/>
                                    <img id="github" src={github} alt="logo"/> 
                                </a>
                            </div>
                </div>
                <div className="project">
                    <h3>Star Wars Homecoming</h3>
                        <br/>
                    <img src={SW} alt="Star Wars Homecoming Home Page"/>
                        <br/>
                    <h4>Description</h4>
                    <p>Star Wars HomeComing is a text based interactive game. Where you can create your own custom character, and travel the known galaxy. It's a lightweight Python application, that is easy to use with a nice UI.</p>
                        <div className="ProjDesc">
                        <Link to="/StarWarsDetails">Details</Link>
                        <a href="http://ec2-3-14-141-156.us-east-2.compute.amazonaws.com/" target="_blank" rel="noreferrer">Deployed Site</a>
                        <a href="https://github.com/bdsullivan123/homecoming" target="_blank" rel="noreferrer">
                            Github Repo
                            <br/>
                            <img id="github" src={github} alt="logo"/> 
                        </a>
                        </div>
                </div>
                <div className="project">
                    <h3>Tip Calculator</h3>
                    <br/>
                    <img src={TipMe} alt="Tip Calculator App"/>
                    <h4>Description</h4>
                    <p>
                        Tip Calculator is a front end mini project to keep my HTML, CSS, and JavaScript skills sharp. I followed a basic wireframe from frontendmentor.
                    </p>
                        <div className="ProjDesc">
                            <a href="https://phellwege.github.io/Tip_Calculator/" target="_blank" rel="noreferrer">Deployed Site</a>
                            <a href="https://github.com/phellwege/Tip_Calculator" target="_blank" rel="noreferrer">
                                Github Repo
                                <br/>
                                <img id="github" src={github} alt="logo"/>
                                </a>
                        </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Projects;