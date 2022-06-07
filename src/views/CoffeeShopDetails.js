import React from 'react';
import Head from '../components/Head';
import NavBarDetails from '../components/NavbarDetails';
import Tail from '../components/Tail';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import img1 from '../static/coffeeshop1.png';
import img2 from '../static/coffeeshop2.png';
import img3 from '../static/coffeeshop3.png';

import JavaScript from '../static/JavaScript.png';
import Html from '../static/HTML.png';
import Bootstrap from '../static/bootstrap.png';
import Node from '../static/nodejs.png';
import Express from '../static/expressjs.png';
import Css from '../static/CSS.png';


const handleDragStart = (e) => e.preventDefault();
const items = [
    <img src={img1} onDragStart={handleDragStart} id="gifStuff"/>,
    <img src={img2} onDragStart={handleDragStart} id="gifStuff"/>,
    <img src={img3} onDragStart={handleDragStart} id="gifStuff"/>,
];

export default () => {
    return (
        <>
            <Head/>
            <NavBarDetails/>
            <div class="page_wrap">
                <h2>About CoffeeShop Cafe</h2>
            </div>
            <div id="row">
                <div id="row_words">
                    <h3>Description</h3>
                    <p>
                    This was a MERN project that presented a log of unique challenges. It has a multi-tiered login system, and can collect inventory information directly from the admin in order to show the currently stocked items.
                    </p>
                </div>
                <div id="carousel2">
                    <h3>
                        CoffeeShop cafe
                    </h3>
                    <br/>
                    <AliceCarousel mouseTracking items={items} autoPlay={true} autoPlayInterval={3000} infinite={true}/>
                </div>
            </div>
            <div class="page_wrap">
                <h3>Technical Description</h3>
                <p id="tech_desc">
                This project started as a solo project and evolved into a multi-person passion project. CoffeeShop was managed using SCRUM in order to maintain efficiency. and changes were administered directly through GitHub. CoffeeShop is a SPA (single page application) primarily built out in ReactJS with express for middle and MongoDB for backend. This allows it to be very user friendly, and have a clean functional appearance. We intentionally avoided the use of Bootstrap for additional CSS practice. Utilized Bcrypt, and multiple validations to protect our clients data.
                </p>
                <h3>Technology Used</h3>
                <div class="skills">
                    <br/>
                <img src={JavaScript} alt="Javascript" id="JavaScript"/>
                <img src={Html} alt="HTML" id="HTML"/>
                <img src={Bootstrap} alt="Bootstrap" id="Bootstrap"/>
                <img src={Express} alt="Express" id="Express"/>
                <img src={Node} alt="Nodejs" id="Node"/>
                <img src={Css} alt="CSS" id="Css"/>
            </div>
            </div>
            
            <Tail/>
        </>
    )
}