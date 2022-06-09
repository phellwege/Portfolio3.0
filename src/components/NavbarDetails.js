import "../NavBar.css";
import React, { useState } from "react"
import resume from '../static/Peter.Hellwege.Resume.pdf';
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import {HashLink as Link } from 'react-router-hash-link';

const NavBarDetails = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }
    const closeMenu = () => {
        setNavbarOpen(false)
    }

    return (
        <>
        <div id="NavBarFull">
            <ul id="navigation">
                <li><a className="active" href="/">Home</a></li>
                <li><Link to="/StarWarsDetails#tech_desc">Technical Overview</Link></li>
                <li><Link to ="/#Projects">More Projects</Link></li>
                <li><Link to ="/#Contact">Contact</Link></li>
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
                        <li><a className="active" href="/" onClick={() => closeMenu()}>Home</a></li>
                        <li><Link to="#tech_desc" onClick={() => closeMenu()}>Technical Overview</Link></li>
                        <li><Link to="/#Projects" onClick={() => closeMenu()}>More Projects</Link></li>
                        <li><Link to="/#Contact" onClick={() => closeMenu()}>Contact</Link></li>
                        <li><a href={resume} download="../static/Peter.Hellwege.Resume.pdf" onClick={() => closeMenu()}>Download Resume</a></li>
                    </ul>
                </nav>
            </div>
</div>
        </>
    )
}
export default NavBarDetails;