import React from 'react';
import Head from '../components/Head';
import NavBar from '../components/NavBar';
import Skills from '../components/Skills';
import Tail from '../components/Tail';
import About from '../components/AboutMe';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import '../Main.css';


export default () => {

    return (
        <div id="background">
            <div id="Home"><Head/></div>
            <NavBar/>        
                <div id="Skills"><Skills/></div>
                <About/>
                <div id="Projects"><Projects/></div>
                <Contact/>
            <Tail/>
        </div>
    )
}

