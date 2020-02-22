import React, { Component } from "react";
import './App.css';
import { Redirect } from "react-router-dom";

class Timer extends Component {
    state={
        count: 10,
        redirect: null
    }

    myInterval = null;
    
    render() {
        return(
            <div>
                <div id='statsNthat'>
                    <h3>Time left: {this.state.count}</h3>
                </div>
                
                {this.state.redirect}
            </div>
        );
    }

    componentDidMount(){
        this.myInterval = setInterval(() => {
            if(this.state.count === 0) {
                clearInterval(this.myInterval);
                this.myInterval = null;
                const { correctLetters, incorrectLetters, totalLetters, totalWords } = this.props;
                this.setState({
                    redirect: <Redirect to={{
                        pathname: './Results_screen',
                        state: {correctLetters: correctLetters, incorrectLetters: incorrectLetters, totalLetters: totalLetters, totalWords: totalWords}
                    }} />
                });
            } else {
                this.setState({
                    count: this.state.count - 1
                })
            }
        }, 1000);
    }

    componentWillUnmount(){
        if(this.myInterval !== null){
            clearInterval(this.myInterval);
        }
    }
}


export default Timer;