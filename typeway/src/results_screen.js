import React from "react";
import './App.css';
import { NavLink } from "react-router-dom"

const results_screen = () => {
    return(
        <div> 
            <div>
                <li><NavLink to="/">Log Out</NavLink></li>
            </div>

            <div>
                <h1>Good on ya lad... You bloody did it.</h1>
            </div>

            <div>
                <li><NavLink to="/typingTest">Try for a better score</NavLink></li>
                <li><NavLink to="/options_screen">Try something else</NavLink></li>
                    
            </div>

        </div>
    );
}


export default results_screen;