import React, { Component } from "react";
import './../App.css';
import Letter from './Letter'

class Text extends Component {

    state = {
        letters: []
    }

    render(){
        const { text, currentPosition, correctLetters, incorrectLetters } = this.props;
        // const currentPositionAsNumber = parseInt(currentPosition);
        const textToLetters = text.split('');
        const textItems = [];
        for(let i = 0; i < textToLetters.length; i++) {
            let isCorrect = null;
            if (correctLetters.includes(i)) {
                isCorrect = true; 
            }
            else if (incorrectLetters.includes(i)) {
                isCorrect = false;
                
            }
            const itemProps = {
                letter: textToLetters[i],
                active: (i === currentPosition),
                correct: isCorrect
            };
            const itemKey = 'TC' + i.toString();
            textItems.push(<Letter { ...itemProps } key={itemKey} />);
        }
        return(
            <div>
                <div className='typingTestText'> 
                    {textItems}
                </div>
            </div>
        );
    }
}


export default Text;