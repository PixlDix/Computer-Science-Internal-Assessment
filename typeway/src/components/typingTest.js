import React, { Component } from 'react';
import './../App.css'
import NavBar from './NavBar'
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
        "tired","section","lungs", "respect", "brother", "crisp" 
    ];

    shuffledWords=this.shuffle(this.wordList).join(' ');

    state={
        showText: false
    }

    startTyping = (e) =>{
        e.preventDefault();
        document.getElementById('typingTestHelpText').innerHTML = '';
        document.getElementById('textbutton').innerHTML = '';
        this.setState({showText: true});
    }

    render(){
        return(
            <div>
                <NavBar />
                
                <div id='typingTestHelpText'>
                    <h1 className='typingTestHelpText'>Timer starts when you press begin</h1>
                </div>

                {this.state.showText === true && <TypeManager text={this.shuffledWords}/>}

                <div> 
                    <div id='textbutton' >
                        <button className='textbutton' onClick={this.startTyping}>Begin</button>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default typingTest;