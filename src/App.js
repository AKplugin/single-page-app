import React, { Component } from 'react';
import Navigation from './components/Navigation.js';
import Dashboard from './components/Dashboard.js';

class App extends Component {
  render() {
    const { containerStyle, navigationStyle, dashboardStyle } = Styles;
    return (
      <div style={containerStyle}>
        <div className="navigationBar">
          <Navigation />
        </div>

        <div style={dashboardStyle}>
          <Dashboard />
        </div>

      </div>
    );
  }
}

const Styles = {
  containerStyle: {
    "display": "flex",
    "flex-direction": "row",
    "height": "auto"
  },
  navigationStyle: {
    
  },
  dashboardStyle: {
    "flex": 6
  }
}

export default App;
