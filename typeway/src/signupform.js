import React, { Component } from 'react';
import { NavLink } from "react-router-dom";


class signupform extends Component {
    state = {
        email: '',
        password: ''
    }

    logContents = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        });
    }

    signUp = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
   
    render() {
        return(
            <div>
                <div>
                    <li><NavLink to="/">back</NavLink></li>
                </div>

                <div>
                    <h1>create account.</h1>
                </div>

                <div>
                    <input id='email' type='email' placeholder='Email' onChange={this.logContents}></input>
                </div>

                <div>
                    <input id='password' type='password' placeholder='Password' onChange={this.logContents}></input>
                </div>
                
                <div>
                    <button onClick={this.signUp}>Sign up</button>
                </div>

                <div>
                    <li><NavLink to="/signinform">Sign in</NavLink></li>
                </div>
            </div>
        );
    }
}

export default signupform;