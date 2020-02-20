import React, { Component } from "react";
import './App.css'

class Letter extends Component{
    render(){
        let classn = 'letterneutral';
        if (this.props.active) {
            classn = 'current';        
        } 
        else if (this.props.correct === true) {
            classn = 'correct';
        }
        else if (this.props.correct === false) {
            classn = 'incorrect';
        } 
        const character = this.props.letter;
        return(
            <span className={classn}>{character}</span>
        );
    }
}

export default Letter;