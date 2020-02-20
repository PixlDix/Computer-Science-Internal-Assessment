import React, { Component } from 'react';
import './App.css';
import login_screen from './login_screen';
import options_screen from './options_screen';
import typingTest from './typingTest';
import Results_screen from './Results_screen';
import signinform from './signinform';
import signupform from './signupform';
import Timer from './Timer';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {  
  render() {
    return(
      <BrowserRouter>
        <div>
          <Route exact path='/' component={login_screen} />
          <Route path='/options_screen' component={options_screen} />
          <Route path='/typingTest' component={typingTest} />
          <Route path='/results_screen' component={Results_screen} />
          <Route path='/signinform' component={signinform} />
          <Route path='/signupform' component={signupform} />
          <Route path='/timer' component={Timer} />
        </div>
      </BrowserRouter>  
    )
  }
}

export default App;
