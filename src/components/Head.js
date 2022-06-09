import {Link} from 'react-router-dom';
import React from 'react';
import '../Head.css';
import Logo from '../static/Logo.png';
import Typewriter from 'typewriter-effect';





const Head = () => {
    

    return (
        <div id='headspace'>
            <div>
                <h1><Link to="/"><img src={Logo} alt="custom logo" id="Logo"/></Link></h1>
            </div>
            <div className='devWrap'>
                <h1>Peter Hellwege</h1>
                <p id="titles">
                    <Typewriter
                    options={{
                        strings: ['Software Developer', 'Developer', 'Dev', 'Software Engineer', 'Engineer', 'Programmer', 'Coder', 'Data Engineer'],
                        autoStart: true,
                        loop: true,
                    }}
                />
                </p>
            </div>
            
        </div>
    )
}
export default Head;