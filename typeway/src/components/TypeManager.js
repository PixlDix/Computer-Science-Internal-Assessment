import React, { Component } from "react";
import correct from '../audio/correct.mp3';
import incorrect from '../audio/incorrect.mp3';
import './../App.css';
import Timer from './Timer';
import Text from './Text';

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

    correctBeep = new Audio (correct)
    incorrectBeep = new Audio (incorrect)

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
                        this.correctBeep.play();
                    } else {
                        incorrectLetters.push(this.state.currentPosition);
                        totalLetters.push(this.state.currentPosition)
                        this.incorrectBeep.play();
                    }
                    const currentPosition = 0;
                    if (currentPosition >= this.state.practiceText.length) {
                        listening = false;
                    }

                    this.setState({
                        currentPosition,
                        correctLetters,
                        incorrectLetters,
                        totalLetters,
                        totalWords,
                        listening,
                        practiceText: this.state.practiceText.substring(1, this.state.practiceText.length)
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
        const { text } = this.props
        this.setPractice(text)
    }

    componentWillUnmount() {
        document.body.removeEventListener('keyup', this.typeListener);
    }

    render(){   
        const wpm = this.state.totalWords.length; 
        const cpm = this.state.totalLetters.length;
        const accuracy = Math.round(this.state.correctLetters.length / (this.state.correctLetters.length + this.state.incorrectLetters.length) * 100)
        return(
            <div>
                <div>
                    <Text text={this.state.practiceText} currentPosition={this.state.currentPosition} correctLetters={this.state.correctLetters} incorrectLetters={this.state.incorrectLetters}/>
                </div>

                <div className='statContainer'>
                    {this.state.startTimer === true && <Timer wpm={wpm} cpm={cpm} accuracy={accuracy} currentPosition={this.state.currentPosition} textLength={this.state.practiceText.length}/>}
                    <h1 className='liveStats'>WPM: { wpm }  CPM: { cpm }  Accuracy: { accuracy }%</h1>
                </div>
            </div>
        );
    }
}


export default TypeManager;