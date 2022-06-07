import React, { useState } from "react"
import "../NavBar.css";
import resume from '../static/Peter.Hellwege.Resume.pdf';
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

const NavBar = () => {

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
                <li><a className="active" href="#Home">Home</a></li>
                <li><a href="#Skills">Skills</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#Contact">Contact</a></li>
                <li><a href={resume} download="../static/Peter.Hellwege.Resume.pdf">Download Resume</a></li>
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
                            <li><a className="active" href="#Home" onClick={() => closeMenu()}>Home</a></li>
                            <li><a href="#Skills" onClick={() => closeMenu()}>Skills</a></li>
                            <li><a href="#Projects" onClick={() => closeMenu()}>Projects</a></li>
                            <li><a href="#Contact" onClick={() => closeMenu()}>Contact</a></li>
                            <li><a href={resume} download="../static/Peter.Hellwege.Resume.pdf" onClick={() => closeMenu()}>Download Resume</a></li>
                        </ul>
                </nav>
            </div>
        </div>
        </>
    )
}
export default NavBar;