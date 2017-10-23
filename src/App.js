import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Navigation from './components/Navigation.js';
import Dashboard from './components/Dashboard.js';
import Home from './components/pages/Home';


class App extends Component {
  render() {
    const { containerStyle, navigationStyle, dashboardStyle } = Styles;
    return (
      <Router>
      <div style={containerStyle}>
        <div className="navigationBar">
          <Navigation />
        </div>

        <div style={dashboardStyle}>
        <Route exact path="/home" component={Home}/>
         <Route path="/about" component={Home}/>
         <Route path="/topics" component={Home}/>
        </div>

      </div>
      </Router>
    );
  }
}

const Styles = {
  containerStyle: {
    "display": "flex",
    "flexDirection": "row",
    "height": "auto"
  },
  navigationStyle: {

  },
  dashboardStyle: {
    "flex": 6
  }
}

export default App;
