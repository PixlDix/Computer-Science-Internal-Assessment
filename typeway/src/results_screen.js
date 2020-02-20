import React, { Component } from "react";
import './App.css';
import { NavLink } from "react-router-dom"

class Results_screen extends Component {
    render(){
        const { totalLetters } = this.props;
        console.log(totalLetters)
        return(
            <div> 
                <div>
                    <li><NavLink to="/">Log Out</NavLink></li>
                </div>
    
                <div>
                    <h1>Good on ya lad... You funking did it.</h1>
                </div>
    
                <div>
                    <h2>Words per minute: 0 <br />
                        Characters per minute: {totalLetters} <br />
                        Accuracy: 0% <br />
                    </h2>
                    <h2>Average Words per minute: must be logged in for this feature <br />
                        Average Characters per minute: must be logged in for this feature <br />
                        Average Accuracy: must be logged in for this feature <br />
                    </h2>
                    <h2>Highest Words per minute: must be logged in for this feature <br />
                        Highest Characters per minute: must be logged in for this feature
                    </h2>
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