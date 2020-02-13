import React, { Component } from 'react';
import { NavLink } from "react-router-dom";


class signupform extends Component {
    
    logContents = (e) => {
        console.log(e.target.value);
    }
    
    signUp = (e) =>{
        e.preventDefault();
        console.log('account created');
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
                    <input id='email' placeholder='Email' onChange={this.logContents}></input>
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