import React, { Component } from 'react';
import { NavLink } from "react-router-dom";


class signinform extends Component {

    logContents = (e) => {
        console.log(e.target.value);
    }

    logIn = (e) => {
        e.preventDefault();
        console.log('logged in');
    }

    render() {
        return(
            <div>
                <div>
                    <li><NavLink to="/">back</NavLink></li>
                </div>

                <div>
                    <h1>Sign in or create account.</h1>
                </div>

                <div>
                    <input id='email' placeholder='Email' onChange={this.logContents}></input>
                </div>

                <div>
                    <input id='password' type='password' placeholder='Password' onChange={this.logContents}></input>
                </div>

                <div>
                    <button onClick={this.logIn}>Log in</button>
                </div>

                <div>
                    <li><NavLink to="/signupform">Create account</NavLink></li>
                </div>
            </div>
        );

    }
}

export default signinform;