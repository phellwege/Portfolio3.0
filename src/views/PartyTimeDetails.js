import React from 'react';
import Head from '../components/Head';
import NavBarDetails from '../components/NavbarDetails';
import Typewriter from 'typewriter-effect';
import CharMoveControl from '../static/giphyMoveMentControl.gif';
import CodeSmall from '../static/CodeSnippetSml.png';
import Tail from '../components/Tail';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import JavaScript from '../static/JavaScript.png';
import Html from '../static/HTML.png';
import Bootstrap from '../static/bootstrap.png';
import Node from '../static/nodejs.png';
import Express from '../static/expressjs.png';
import Css from '../static/CSS.png';

import img1 from '../static/giphyHomePage.gif';
import img2 from '../static/giphyMusic.gif';
import img3 from '../static/giphyMovieTheatre.gif';
import img4 from '../static/giphyMovie.gif';


const handleDragStart = (e) => e.preventDefault();
const items = [
    <img src={img1} onDragStart={handleDragStart} id="gifStuff"/>,
    <img src={img2} onDragStart={handleDragStart} id="gifStuff"/>,
    <img src={img3} onDragStart={handleDragStart} id="gifStuff"/>,
    <img src={img4} onDragStart={handleDragStart} id="gifStuff"/>,
];

export default () => {
    return (
        <>
            <Head/>
            <NavBarDetails/>
            <div class="page_wrap">
                <h2>About PartyTime</h2>
            </div>
            <div id="row">
                <div id="row_words">
                    <h3>Description</h3>
                    <p>
                        Party Time is a work in progress. It's a comprehensive, immersive game, that focusses around activities that are available during either the day or night. the activities become unavailable during either of the opposite timeframes.
                        <br/>
                        <br/>
                        All of the animations were created on <a href="https://www.piskelapp.com/" target="_blank">Piskel</a> from scratch. I encoded the different actions in Javascript. and the day/night toggle effect is comprehensive. 
                    </p>
                </div>
                <div id="carousel">
                    <h3>
                        Party Time Pages
                    </h3>
                    <br/>
                    <AliceCarousel mouseTracking items={items} autoPlay={true} autoPlayInterval={8000} infinite={true}/>
                </div>
            </div>
            <div class="page_wrap">
                <h3>Technical Description</h3>
                <p id="tech_desc">
                    I started with a basic written proposal of what I wanted to accomplish. Then I wireframed the entire project, adding ToDo items as I went. I hadn't ever made a day/night toggle so that was the first problem to tackle.
                    <br/>
                    There was a lot of animation with JavaScript interactive elements I needed to incorporate. I created a system within my ToDo to keep track of each element so that I wouldn't get lost, and Notated my code thoroughly.
                    <br/>
                    After creating a framework for the project I tested each element in succession. I didn't want to attach a backend to Party Time, as I wanted to do a fully front end project that really pushed the boundaries of my design capabilities.
                    <br/>
                    <br/>
                    Below is a code snippet of one of the interesting problems that occur when building a interactive 2D game.
                </p>
                <div id="showOff">
                    <div id="showOffLeft">
                        <img src={CharMoveControl} alt="Character movement controls" id="gifStuff"/>
                        <br/>
                        <Typewriter
                    options={{
                        strings: [ 'Right', 'Left', 'Stop'],
                        autoStart: true,
                        loop: true,
                    }}
                />
                    </div>
                    <div id="showOffRight">
                        <p>
                            Code Snippet
                        </p>
                        <img src={CodeSmall} alt="small code snippet"/>
                    </div>
                </div>
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