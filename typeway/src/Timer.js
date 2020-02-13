import React, { Component } from "react";
import './App.css';

class Timer extends Component {
    state={
        count: 60
    }
    render() {
        const {count} = this.state
        return(
            <div>
                <div id='statsNthat'>
                    <h3>Time left: {count}</h3>
                </div>
            </div>

        );
    }
    componentDidMount(){
        this.myInterval = setInterval(() => {
            this.setState({
                count: this.state.count - 1
            })
        }, 1000)
    }
}


export default Timer;