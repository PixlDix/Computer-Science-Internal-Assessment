import React, { Component } from "react";
import './App.css';
import { NavLink } from "react-router-dom"

class Results_screen extends Component {
    render(){
        const totalWords = this.props;
        const totalLetters = this.props;
        const correctLetters = this.props;
        const incorrectLetters = this.props;
        return(
            <div> 
                <div>
                    <li><NavLink to="/signinform">Log In</NavLink></li>
                </div>
    
                <div>
                    <h1>Good on ya lad... You funking did it.</h1>
                </div>
    
                <div>
                    <h2>Words per minute: {totalWords.history.location.state.totalWords.length} <br />
                        Characters per minute: {totalLetters.history.location.state.totalLetters.length} <br />
                        Accuracy: {Math.round(correctLetters.history.location.state.correctLetters.length / (correctLetters.history.location.state.correctLetters.length + incorrectLetters.history.location.state.incorrectLetters.length) * 100) } % <br />
                    </h2>
                    <h2>Log in for more features</h2>
                </div>
    
                <div>
                    <li><NavLink to="/typingTest">Try for a better score</NavLink></li>
                    <li><NavLink to="/options_screen">Try something else</NavLink></li>
                        
                </div>
    
            </div>
        );
    }
}


export default Results_screen;