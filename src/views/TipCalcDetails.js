import React from 'react';
import Head from '../components/Head';
import NavBarDetails from '../components/NavbarDetails';
import TipCalc from '../static/giphyTipCalc.gif'
import Tail from '../components/Tail';

import Html from '../static/HTML.png';
import Css from '../static/CSS.png';
import JavaScript from '../static/JavaScript.png';

export default () => {
    return (
        <>
            <Head/>
            <NavBarDetails/>
            <div class="page_wrap">
                <h2>About Tip Calculator</h2>
            </div>
            <div id="row">
                <div id="row_words">
                    <h3>Description</h3>
                    <br/>
                    <p>
                    This was a great front end project from <a href="https://www.frontendmentor.io/home">frontendmentor</a>. It was challenging to find a solution to making the code as DRY as possible, but thanks to google and my training at the Coding Dojo boot camp it didn't take long to find a viable solution.
                    </p>                
                    </div>
                <div id="carousel2">
                    <h3>
                        Tip Calculator
                    </h3>
                    <br/>
                    <img src={TipCalc} alt="tip calculator app"/>
                </div>
            </div>
            <div class="page_wrap">
                <h3 id="tech_desc">Technology Used</h3>
                <div class="skills">
                    <br/>
                <img src={Html} alt="HTML" id="HTML"/>
                <img src={Css} alt="CSS" id="Css"/>
                <img src={JavaScript} alt="Javascript" id="JavaScript"/>
            </div>
            </div>
            <Tail/>
        </>
    )
}