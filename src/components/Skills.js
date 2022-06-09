import "../Main.css"
import JavaScript from '../static/JavaScript.png';
import Java from '../static/java.png';
import Python from '../static/python.png';
import jQuery from '../static/jQuery.png';
import Ajax from '../static/ajax.png';
import Bootstrap from '../static/bootstrap.png';
import Node from '../static/nodejs.png';
import Express from '../static/expressjs.png';
import MySQL from '../static/mysql.png';
import Django from '../static/django.png';
import MongoDB from '../static/mongodb.png';
import Html from '../static/HTML.png';
import Css from '../static/CSS.png';

const Skills = () => {
    return (
        <>
            <div className="page_wrap" id='Skills'>
                <h2>Skills:</h2>
                <div className="skills">
                    <img src={JavaScript} alt="Javascript" id="JavaScript"/>
                    <img src={Java} alt="Java"/>
                    <img src={Html} alt="HTML" id="HTML"/>
                    <img src={Css} alt="CSS" id="Css"/>
                    <img src={Python} alt="Python" id="Python"/>
                </div>
                <div className="skills">
                    <img src={jQuery} alt="jQuery" id="jQuery"/>
                    <img src={Ajax} alt="Ajax" id="Ajax"/>
                    <img src={Bootstrap} alt="Bootstrap" id="Bootstrap"/>
                </div>
                <div className="skills">
                    <img src={Node} alt="Nodejs" id="Node"/>
                    <img src={Django} alt="Django" id="Django"/>
                    <img src={Express} alt="Express" id="Express"/>
                    <img src={MongoDB} alt="Mongo" id="Mongo"/>
                    <img src={MySQL} alt="MySQL" id="MySQL"/>
                </div>
            </div>
        </>
    )
}
export default Skills;