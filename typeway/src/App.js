import React, { Component } from 'react';
import './App.css';
import login_screen from './login_screen';
import options_screen from './options_screen';
import typingTest from './typingTest';
import results_screen from './results_screen';
import { BrowserRouter, Route } from 'react-router-dom';


class App extends Component {  
  render() {
    return(
      <BrowserRouter>
        <login_screen />
        <Route exact path='/' component={login_screen} />
        <Route path='/options_screen' component={options_screen} />
        <Route path='/typingTest' component={typingTest} />
        <Route path='/results_screen' component={results_screen} />
      </BrowserRouter>  
    )
  }
}

export default App;
