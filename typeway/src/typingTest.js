import React, { Component } from 'react';
import './App.css'
import { NavLink } from "react-router-dom";
import TypeManager from './TypeManager';

class typingTest extends Component {

    shuffle(a) {
        for (let i=0; i<a.length; i++) {
            const j = Math.floor(Math.random() * a.length);
            [a[i], a[j]] = [a[j], a[i]];
        };
        return a;
    }    

	wordList = [
        "section","provide","green","machine","tree","plastic","smell","in","radio","if",
        "few","soldier","unit","physical","possible","distant","youth","jungle","stick","seed",
        "became","oldest","log","detail","subject","interest","getting","order","feed","cookies",
        "purple","page","chest","bell","parallel","fine","walk","pain","father","occasionally",
        "plastic","in","naturally","income","addition","neck","layers","college","information","anyone",
        "discovery","hall","one","threw","daily","gone","nine","to","storm","available",
        "tin","distance","pound","type","valley","egg","will","slightly","mixture","star",
        "forget","walk","mouse","satellites","one","eat","nearest","present","decide","ring",
        "seat","meal","later","orbit","wear","differ","rhyme","barn","member","audience",
        "lead","week","guide","fruit","drive","form","faster","produce","highest","either",
        "tired","section","lungs","forgotten","father","add","fastened","brush","visitor","class"
    ];

    shuffledWords=this.shuffle(this.wordList).join(' ');

    startTyping = (e) =>{
        e.preventDefault();
        document.getElementById('typingTestHelpText').innerHTML = '';
        document.getElementById('textbutton').innerHTML = '';
        this.refs.typeMan.setPractice(this.shuffledWords);
    }

    finishedTyping = (data) => {
        if (data.correctLetters && data.incorrectLetters) {
            console.log('typing is done, got', data.correctLetters.length, 'right,', data.incorrectLetters.length, 'wrong.');
            console.log('you have an accuracy of', Math.round(data.correctLetters.length / (data.correctLetters.length + data.incorrectLetters.length) * 100) + '%');
        }
    }

    render(){
        return(
            <div>
                <div id='logOutButton'>
                    <li><NavLink to="/signinform">Log In</NavLink></li>
                </div>
                
                <div id='typingTestHelpText'>
                    <h1>Timer starts when you start typing.</h1>
                </div>

                <div>
                    <TypeManager ref="typeMan" finishedAction={this.finishedTyping} /> 
                    <div id='textbutton'>
                        <button onClick={this.startTyping}>Begin</button>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default typingTest;