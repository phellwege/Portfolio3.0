import React, { useState } from "react"
import "../NavBar.css";
import resume from '../static/Peter.Hellwege.Resume.pdf';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import Toggle from '../Toggle/DayNight_Mode';
import {HashLink as Link } from 'react-router-hash-link';

// the first set is dark mode the second is light mode
// dark contrast color b1b1b3
// light contrast color #111
const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${props => 
            props.theme.mode === 'dark' ? '#2a2a2e' : 'none'};
        color: ${props => 
            props.theme.mode === 'dark' ? '#b1b1b3' : '#111' };
        transition: ${props => 
            props.theme.mode === 'dark' ? 'all 0.3s ease-in-out': 'all 0.5s ease-in-out'};
    }
    h1 {
        color: ${props => 
            props.theme.mode === 'dark' ? 'whitesmoke' : '#111' };
    };
    h2 {
        color: ${props => 
            props.theme.mode === 'dark' ? 'whitesmoke' : '#111' };
    }
    #navigation {
        box-shadow: ${props =>
            props.theme.mode === 'dark' ? '0 0 15px #56f981' : '0 0 8px rgba(55,55,55,1)'};
        background-color: ${props =>
            props.theme.mode === 'dark' ? '#2a292d' : '#EAF2F8'};
        transition: ${props => 
            props.theme.mode === 'dark' ? 'all 0.3s ease-in-out': 'all 0.5s ease-in-out'};
    };
    #navigation li a:hover:not(.active) {
        background-color: ${props =>
            props.theme.mode === 'dark' ? '#2a2a2e' : '#5499C7'};
        color: ${props =>
            props.theme.mode === 'dark' ? '#56f981' : 'white'};
        border: ${props =>
            props.theme.mode === 'dark' ? '1px solid darkgreen' : '1px solid black'};
        box-shadow: ${props =>
            props.theme.mode === 'dark' ? '0 0 5px #56f981' : 'none'};
    };
    #Logo {
        box-shadow: ${props =>
            props.theme.mode === 'dark' ? '0 0 15px #56f981' : '0 0 10px rgba(33,33,33,1)'};
    };
    .resume_button a:hover:not(active) {
        border-radius: ${props =>
            props.theme.mode === 'dark' ? '.9em' : '.9em'};
        box-shadow: ${props =>
            props.theme.mode === 'dark' ? '0 0 15px #56f981' : '0 0 8px rgba(33,33,33,1)'};
    };
    .skills img {
        box-shadow: ${props =>
            props.theme.mode === 'dark' ? '0 0 7px whitesmoke' : 'none'};
    };
    #JavaScript {
        box-shadow: ${props =>
            props.theme.mode === 'dark' ? '0 0 7px #d5ba32' : 'none'};
    }
    #HTML {
        box-shadow: ${props =>
            props.theme.mode === 'dark' ? '0 0 7px #e44f26' : 'none'};
    }
    #Css {
        box-shadow: ${props =>
            props.theme.mode === 'dark' ? '0 0 7px #1471b6' : 'none'};
    }
    #Python {
        box-shadow: ${props =>
            props.theme.mode === 'dark' ? '0 0 7px #64a1d5' : 'none'};
    }
    #jQuery {
        box-shadow: ${props =>
            props.theme.mode === 'dark' ? '0 0 7px #3fac8e' : 'none'};
    }
    #Ajax {
        box-shadow: ${props =>
            props.theme.mode === 'dark' ? '0 0 7px #64a1d5' : 'none'};
    }
    #Bootstrap {
        box-shadow: ${props =>
            props.theme.mode === 'dark' ? '0 0 7px #5e4585' : 'none'};
    }
    #Node {
        box-shadow: ${props =>
            props.theme.mode === 'dark' ? '0 0 7px #3e853d' : 'none'};
    }
    #Django {
        box-shadow: ${props =>
            props.theme.mode === 'dark' ? '0 0 7px #3e853d' : 'none'};
    }
    #MySQL {
        box-shadow: ${props =>
            props.theme.mode === 'dark' ? '0 0 7px #01758f' : 'none'};
    }
    #Express {
        box-shadow: ${props =>
            props.theme.mode === 'dark' ? 'none' : 'none'};
    }
    #job_links a {
        color: ${props =>
            props.theme.mode === 'dark' ? '#56f981' : '#222222'};
        text-shadow: ${props =>
            props.theme.mode === 'dark' ? '0 0 1px #56f981' : 'none'};
    }
    #footer_links a {
        color: ${props =>
            props.theme.mode === 'dark' ? '#56f981' : '#222222'};
        text-shadow: ${props =>
            props.theme.mode === 'dark' ? '0 0 1px #56f981' : 'none'};
    }
    #navigation li a.active {
        box-shadow: ${props =>
            props.theme.mode === 'dark' ? '0 0 5px #56f981' : 'none'};
    }
    #navigation li a {
        color: ${props =>
            props.theme.mode === 'dark' ? 'white' : 'none'};
    }
    .project a { 
        color: ${props =>
            props.theme.mode === 'dark' ? '#56f981' : '#222222'};
        text-shadow: ${props =>
            props.theme.mode === 'dark' ? '0 0 1px #56f981' : 'none'};
    }
    #row_words a {
        color: ${props =>
            props.theme.mode === 'dark' ? '#56f981' : '#222222'};
        text-shadow: ${props =>
            props.theme.mode === 'dark' ? '0 0 1px #56f981' : 'none'};
    }
    #gifStuff {
        box-shadow: ${props =>
            props.theme.mode === 'dark' ? '0 0 10px whitesmoke' : 'none'};
    }
    .page_wrap a {
        color: ${props =>
            props.theme.mode === 'dark' ? '#56f981' : '#222222'};
        text-shadow: ${props =>
            props.theme.mode === 'dark' ? '0 0 1px #56f981' : 'none'};
    }
    };
`

const NavBar = (props) => {
    const {active}=props;
    const [toggled, setToggled] = useState(false);
    const [theme, setTheme] = useState({mode: 'light'})
    const handleClick =() => {
        setToggled((s)=>!s);
        setTheme(theme.mode === 'dark' ? {mode: 'light'}: {mode:'dark'});
}
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }
    const closeMenu = () => {
        setNavbarOpen(false)
    }
    return (
        <ThemeProvider theme={theme} setTheme={setTheme}>
        <GlobalStyle />
        <>
        <div id="NavBarFull">
            <ul id="navigation">
                <li><Link to ='/#Home' className={(active===0?" active":"")}>Home</Link></li>
                <li><Link to="/#Skills" className={(active===1?" active":"")}>Skills</Link></li>
                <li><Link to="/#Projects" className={(active===2?" active":"")}>Projects</Link></li>
                <li><Link to="/#Contact" className={(active===3?" active":"")}>Contact</Link></li>
                <li><a href={resume} download="../static/Peter.Hellwege.Resume.pdf">Download Resume</a></li>
                    <div className="Mode">
                        <Toggle toggled={toggled} onClick={handleClick} />
                        <p>{theme.mode === 'dark' ? "Dark" : "Light"}</p>
                    </div>
                </ul>
                
            <div id="Hamburger_Menu">
                <nav className="navBar">
                    <button onClick={handleToggle}>{navbarOpen ? (
                    <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
                    ) : (
                    <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
                    )}
                    </button>
                        <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                            <li><Link className="active" to="#Home" onClick={() => closeMenu()}>Home</Link></li>
                            <li><Link to="#Skills" onClick={() => closeMenu()}>Skills</Link></li>
                            <li><Link to="#Projects" onClick={() => closeMenu()}>Projects</Link></li>
                            <li><Link to="#Contact" onClick={() => closeMenu()}>Contact</Link></li>
                            <li><a href={resume} download="../static/Peter.Hellwege.Resume.pdf" onClick={() => closeMenu()}>Download Resume</a></li>
                            <div className="Mode">
                            <Toggle toggled={toggled} onClick={() => {handleClick(); closeMenu();}} />
                            <p>{theme.mode === 'dark' ? "Dark" : "Light"}</p>
                            </div>
                        </ul>
                        
                </nav>
            </div>
        </div>
        </>
        </ThemeProvider>
    )
}
export default NavBar;