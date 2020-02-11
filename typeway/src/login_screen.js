import React from 'react';
import './App.css';
import { Link, NavLink } from 'react-router-dom';

const login_screen = () => {  
    return(
        <div id="parent">
            <div>
                <h1 id="welcomeText">
                    Welcome to:
                </h1>
                <h1 id="loginText">
                    TypeWay
                </h1>
            </div>

            <div id="buttons">
                <div id="logIn">
                    <li className="logInScreenButton"><NavLink to="/options_screen">Log in/Sign Up</NavLink></li>
                </div>

                <div id="guest">
                    <li className="logInScreenButton"><NavLink to="/options_screen">Continue as guest</NavLink></li>
                </div>
            </div>
        </div>
    );
}

export default login_screen;