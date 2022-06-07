import { Link } from '@reach/router';
import github from '../static/github.png';

import img1 from '../static/giphyHomePage.gif';
import SW from '../static/giphySWHomePage.gif';
import CoffeeHome from '../static/coffeeshop1.png';
import Ep1 from '../static/EP1.png';
import TipMe from '../static/giphyTipCalc.gif';
const Projects = () => {
    return (
        <>
        <div class="page_wrap">
            <h2>Projects</h2>
            <div class="project_wrapper">

            <div class="project">
                <h3>CoffeeShop Cafe</h3>
                <br/>
                    <img src={CoffeeHome} alt="CoffeeShop Cafe Home"/>
                    <br/>
                    <h4>Description</h4>
                    <p>CoffeeShop is an E-commerce application designed to make it easier for small business owners to operate their business. It has a multi-tiered login system allowing easy delegation, while mitigating business risk. Accomplished with a robust backend written in NodeJS.</p>
                    <br/>
                    <p>
                        <Link to="/CoffeeShopDetails">Details</Link>
                        <br/>
                        <a href="https://github.com/phellwege/CoffeeShop" target="_blank">
                            Github Repo
                            <br/>
                            <img id="github" src={github} alt="logo"/>
                        </a>
                    </p>
            </div>
            <div class="project">
                <h3>Star Wars Homecoming</h3>
                    <br/>
                    <img src={SW} alt="Star Wars Homecoming Home Page"/>
                    <br/>
                    <h4>Description</h4>
                    <p>Star Wars HomeComing is a text based interactive game. Where you can create your own custom character, and travel the known galaxy. It's a lightweight Python application, that is easy to use with a nice UI.</p>
                    <br/>
                    <br/>
                    <p>
                        <Link to="/StarWarsDetails">Details</Link>
                        <br/>
                        <a href="http://ec2-3-14-141-156.us-east-2.compute.amazonaws.com/" target="_blank">Deployed Site</a>
                        <br/>
                        <a href="https://github.com/bdsullivan123/homecoming" target="_blank">
                            Github Repo
                            <br/>
                            <img id="github" src={github} alt="logo"/> 
                            </a>
                    </p>
            </div>
            <div class="project">
                <h3>Event Planner</h3>
                <br/>
                    <img src={Ep1} alt="Event Planner Home Page"/>
                <br/>
                <br/>
                <h4>Description</h4>
                <p>Event Planner is a basic event planning application. It allows the user so sign in and create or join events and can determine the location and input it on google maps. It also determines how many guests are currently in attendance.</p>
                <br/>
                    <p>
                        <Link to="/EventPlannerDetails">Details</Link>
                    </p>
            </div>
            <div class="project">
                <h3>Party Time</h3>
                <br/>
                <img src={img1} alt=""/>
                <br/>
                <h4>Description</h4>
                    <p>
                        Party Time is an ongoing Single Page Application (SPA) built from the ground up using ReactJS, CSS, and Javascript. It's a really fun and frustrating project to help me in my pursuit of constantly improving my code and knowledge of implementation.
                    </p>
                    <br/>
                    <p>
                        <Link to="/PartyTimeDetails">Details</Link>
                        <br/>
                        <a href="https://github.com/phellwege/ThePartyTime" target="_blank">
                            Github Repo
                            <br/>
                            <img id="github" src={github} alt="logo"/> 
                            </a>
                    </p>
            </div>
            <div class="project">
                <h3>Tip Calculator</h3>
                <br/>
                <img src={TipMe} alt="Tip Calculator App"/>
                <h4>Description</h4>
                <p>
                    Tip Calculator is a front end mini project to keep my HTML, CSS, and JavaScript skills sharp. I followed a basic wireframe from frontendmentor, which I've found to be very helpful.
                </p>
                    <br/>
                    <p>
                        <Link to="/TipCalcDetails">Details</Link>
                        <br/>
                        <a href="https://phellwege.github.io/Tip_Calculator/" target="_blank">Deployed Site</a>
                        <br/>
                        <a href="https://github.com/phellwege/Tip_Calculator" target="_blank">
                            Github Repo
                            <br/>
                            <img id="github" src={github} alt="logo"/>
                            </a>
                    </p>
            </div>
            {/* <div class="project">
                <h3>Project</h3>
                <br/>
                <h4>Description</h4>
                <br/>
                    <h4>Details</h4>
            </div> */}
            </div>
        </div>
        </>
    )
}
export default Projects;