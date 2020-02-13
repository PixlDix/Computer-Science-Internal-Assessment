import React, { Component } from 'react';
import './App.css';
import login_screen from './login_screen';
import options_screen from './options_screen';
import typingTest from './typingTest';
import results_screen from './results_screen';
import signinform from './signinform';
import signupform from './signupform';
import timer from './Timer';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {  
  render() {
    return(
      <BrowserRouter>
        <div>
          <Route exact path='/' component={login_screen} />
          <Route path='/options_screen' component={options_screen} />
          <Route path='/typingTest' component={typingTest} />
          <Route path='/results_screen' component={results_screen} />
          <Route path='/signinform' component={signinform} />
          <Route path='/signupform' component={signupform} />
          <Route path='/timer' component={timer} />
        </div>
      </BrowserRouter>  
    )
  }
}

export default App;
