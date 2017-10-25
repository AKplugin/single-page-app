import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Link, Switch
} from 'react-router-dom';
import Navigation from './components/Navigation.js';
import Dashboard from './components/Dashboard.js';
import Home from './components/pages/Home';
import Settings from './components/pages/Settings';
import Pages from './components/pages/Pages';


class App extends Component {
  render() {
    const { containerStyle, navigationStyle, dashboardStyle } = Styles;
    return (
      <BrowserRouter>
      <div style={containerStyle}>
        <div className="navigationBar">
          <Navigation />
        </div>

        <div style={dashboardStyle}>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/Settings" component={Settings}/>
            <Route exact path="/Pages" component={Pages}/>
          </Switch>

        </div>

      </div>
      </BrowserRouter>
    );
  }
}

const Styles = {
  containerStyle: {
    "display": "flex",
    "flexDirection": "row",
    "height": "100%"
  },
  navigationStyle: {

  },
  dashboardStyle: {
    "flex": 6
  }
}

export default App;
