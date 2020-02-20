import React, { Component } from "react";
import './App.css';
import Timer from './Timer'
import Text from './Text'


class TypeManager extends Component{
    
    state = {
        listening: false,
        currentPosition: 0,
        correctLetters: [],
        incorrectLetters: [],
        totalLetters: [],
        totalWords: [],
        practiceText: '',
        startTimer: false,
        showText: false
    }

    setPractice(text) {
        this.setState({
            listening: true,
            currentPosition: 0,
            correctLetters: [],
            incorrectLetters: [],
            totalLetters: [],
            totalWords: [],
            practiceText: text,
            startTimer:true,
            showText: true
        });
    }

    startTyping(){
        this.state.setState({ listening: true });
        this.state.setState({ startTimer: true });
    }
    typeListener = (event) => {
        if (this.state.listening) {
            if (event.key) {
                if (event.key.length === 1) {
                    event.preventDefault();
                    const correctLetters = [...this.state.correctLetters];
                    const incorrectLetters = [...this.state.incorrectLetters];
                    const totalLetters = [...this.state.totalLetters];
                    const totalWords = [...this.state.totalWords];
                    let listening = true;
                    if (event.key === ' '){
                        totalWords.push(this.state.currentPosition);        
                    }
                    if (event.key === this.state.practiceText[this.state.currentPosition]) {
                        correctLetters.push(this.state.currentPosition);
                        totalLetters.push(this.state.currentPosition);
                    } else {
                        incorrectLetters.push(this.state.currentPosition);
                        totalLetters.push(this.state.currentPosition)
                    }
                    const currentPosition = this.state.currentPosition + 1;
                    if (currentPosition >= this.state.practiceText.length) {
                        listening = false;
                    }
                    this.setState({
                        currentPosition,
                        correctLetters,
                        incorrectLetters,
                        totalLetters,
                        totalWords,
                        listening
                    });
                    if (listening === false && this.props.finishedAction) {
                        this.props.finishedAction({ correctLetters, incorrectLetters });
                    }
                }
            }
        }
    }

    componentDidMount() {
        document.body.addEventListener('keyup', this.typeListener);
    }

    componentWillUnmount() {
        document.body.removeEventListener('keyup', this.typeListener);
    }

    render(){
        return(
            <div>

                {this.state.showText === true && <Text text={this.state.practiceText} currentPosition={this.state.currentPosition} correctLetters={this.state.correctLetters} incorrectLetters={this.state.incorrectLetters}/>}

                <div id='statsNthat'>
                    <h1>WPM: { this.state.totalWords.length }  CPM: { this.state.totalLetters.length }  Accuracy: { Math.round(this.state.correctLetters.length / (this.state.correctLetters.length + this.state.incorrectLetters.length) * 100) } %</h1>
                </div>

                {this.state.startTimer === true && <Timer correctLetters={this.state.correctLetters} incorrectLetters={this.state.incorrectLetters} totalWords={this.state.totalWords} totalLetters={this.state.totalLetters}/>}

            </div>
        );
    }
}

export default TypeManager;