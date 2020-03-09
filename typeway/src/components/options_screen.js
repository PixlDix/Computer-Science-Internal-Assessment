import React from "react";
import './../App.css';
import { NavLink } from "react-router-dom";
import NavBar from './NavBar';

const options_screen = () => {
    return(
        <div> 
            <NavBar />
            
            <div>
                <h1 id='optionsText'>Please select what you would like to do.</h1>
            </div>

            <div id='typingTestButton'>
                <li className="optionScreenButton"><NavLink to="/typingTest">Typing Test</NavLink></li>
            </div>
        </div>
    );
}


export default options_screen;