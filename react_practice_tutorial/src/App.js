import React, { Component } from 'react';
import SithMasters from './SithMasters';
import Welcome from './Welcome';
import Navigator from './Navigator';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <Navigator />
          <Switch>
            <Route path="/sithlords" exact component={SithMasters} />
            <Route path="/" exact component={Welcome} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
