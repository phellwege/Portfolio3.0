import React from 'react';
import Head from '../components/Head';
import NavBarDetails from '../components/NavbarDetails';
import Tail from '../components/Tail';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import img1 from '../static/giphySWHomePage.gif';
import img4 from '../static/SW3.png';
import img5 from '../static/SW4.png';

import Html from '../static/HTML.png';
import Bootstrap from '../static/bootstrap.png';
import Ajax from '../static/ajax.png';
import Python from '../static/python.png';
import Django from '../static/django.png';
import Css from '../static/CSS.png';
import jQuery from '../static/jQuery.png';

const handleDragStart = (e) => e.preventDefault();
const items = [
    <img src={img1} onDragStart={handleDragStart} id="gifStuff" alt='img thumnail'/>,
    <img src={img4} onDragStart={handleDragStart} id="gifStuff" alt='img thumbnail'/>,
    <img src={img5} onDragStart={handleDragStart} id="gifStuff" alt='img thumbnail'/>,
];

export default () => {
    return (
        <>
            <Head/>
            <NavBarDetails/>
            <div className="page_wrap">
                <h2 id='top'>About Star Wars Homecoming</h2>
            </div>
            <div id="row">
                <div id="row_words">
                    <h3>Description</h3>
                    <p>
                    This was a really fun Python project that three engineers completed in a little under four days. We didn't want to utilize any API's, because we wanted to build everything form scratch. The overall concept is a text based star wars game, which gave us some interesting requirements. We needed a login and registration, as well as character selection and individual statistics. We then needed to create a massive database of planets, and their specific information to allow travel to unique worlds.
                    </p>                
                    </div>
                <div id="carousel2">
                    <h3>
                        Star Wars Homecoming
                    </h3>
                    <br/>
                    <AliceCarousel mouseTracking items={items} autoPlay={true} autoPlayInterval={6500} infinite={true}/>
                </div>
            </div>
            <div className="page_wrap">
                <h3>Technical Description</h3>
                <p id="tech_desc">
                Collaborated on a team of three and coordinated planning, creating wireframes, and group discussions in order to increase overall productivity on the project. Designed a responsive, clean front-end interface using a combination of CSS, SQLite and JQuery to create a more seamless and comprehensive environment. Implemented a robust SQLite database using Django in order to improve future maintenance, and elevate user experience. Utilized Bcrypt, and multiple validations to protect our data. Tested the code using W3 Code Validator to ensure it functioned at its maximum potential.                
                </p>
                <h3>Technology Used</h3>
                <div className="skills">
                    <br/>
                <img src={Python} alt="Python" id="Python"/>
                <img src={Html} alt="HTML" id="HTML"/>
                <img src={Bootstrap} alt="Bootstrap" id="Bootstrap"/>
                <img src={jQuery} alt="jQuery" id="jQuery"/>
                <img src={Ajax} alt="Ajax" id="Ajax"/>
                <img src={Django} alt="Django" id="Django"/>
                <img src={Css} alt="CSS" id="Css"/>
            </div>
            </div>
            <Tail/>
        </>
    )
}