import React, { Component } from 'react';
import Siths from './Siths';

class App extends Component {
  state = {
    siths: [
      {name: "Darth Plagueis, the wise", rank: "Grand Lord", skillLevel: 9.8, uid: "dplgs"},
      {name: "Sheev Palpatine aka Darth Sidious", rank: "Emperor", skillLevel: 9.1, uid: "shitface"},
      {name: "Count Dooku", rank: "Count", skillLevel: 8.2, uid: "ticktock"},
    ],
    where: "away"
  }
  handleClick = (event) => {
    console.log(event);
    const list = this.state.siths;
    list[0].rank = 'Grandmaster';
    this.setState({
      siths: list
    });
  }
  render() {
    return(
      <div>
        <h1>Cut { this.state.where }!</h1>
        <Siths title="Whatever" lords={this.state.siths} />
        <button onClick={this.handleClick}>KICK ME</button>
      </div>
    )
  }
}

export default App;