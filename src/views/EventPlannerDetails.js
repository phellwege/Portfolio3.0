import React from 'react';
import Head from '../components/Head';
import NavBarDetails from '../components/NavbarDetails';
import Tail from '../components/Tail';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import img1 from '../static/EP1.png';
import img2 from '../static/EP2.png';

import MySQL from '../static/mysql.png';
import Java from '../static/java.png';
import Css from '../static/CSS.png';
import jQuery from '../static/jQuery.png';
import Html from '../static/HTML.png';
import Bootstrap from '../static/bootstrap.png';

const handleDragStart = (e) => e.preventDefault();
const items = [
    <img src={img1} onDragStart={handleDragStart} id="gifStuff"/>,
    <img src={img2} onDragStart={handleDragStart} id="gifStuff"/>,
];

export default () => {
    return (
        <>
            <Head/>
            <NavBarDetails/>
            <div class="page_wrap">
                <h2>About Event Planner</h2>
            </div>
            <div id="row">
                <div id="row_words">
                    <h3>Description</h3>
                    <p>
                    This Java Project required a lot of thought, for being such a simplistic application. I added in-State and out-of-State protocols for users, as well as dynamic google maps api. Which proved to be surprisingly challenging. This application needed a login and registration page as well as the JavaBcrypt backend frameworks for it to function. It has a number of users feature, and each user can attend/cancel their attendance. They can also comment on any Event, and edit or delete only their own comments. Each event can be edited only by the Host of the event. This was a challenging, but very fun little project over the course of two days.
                    </p>                
                    </div>
                <div id="carousel2">
                    <h3>
                        Event Planner
                    </h3>
                    <br/>
                    <AliceCarousel mouseTracking items={items} autoPlay={true} autoPlayInterval={6500} infinite={true}/>
                </div>
            </div>
            <div class="page_wrap">
                <h3>Technical Description</h3>
                <p id="tech_desc">
                Led a team of three engineers remotely via Github tools including facilitating discovery and planning meetings, designing code architecture, producing wireframe and journey maps, and testing to deliver a functional MVP in 7 days. Enriched UX with CSS, HTML, JavaScript to create a customer messaging feature similar to Facebook’s, and integrated a third party GoogleMaps API with JQuery to enable geolocation and increase user engagement. Maximized user data and application security with JavaBcrypt and optimized load time by testing and validating applications with W3 Code Validator.                </p>
                <h3>Technology Used</h3>
                <div class="skills">
                    <br/>
                <img src={Html} alt="HTML" id="HTML"/>
                <img src={Java} alt="Java"/>
                <img src={Bootstrap} alt="Bootstrap" id="Bootstrap"/>
                <img src={jQuery} alt="jQuery" id="jQuery"/>
                <img src={Css} alt="CSS" id="Css"/>
                <img src={MySQL} alt="MySQL" id="MySQL"/>
            </div>
            </div>
            <Tail/>
        </>
    )
}