import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  NavLink, Switch
} from 'react-router-dom';
import Navigation from './components/Navigation.js';
import Dashboard from './components/Dashboard.js';
import Home from './components/pages/Home';
import Button from './components/pages/Button';
import Cards from './components/pages/Cards';
import Lists from './components/pages/Lists';
import Menus from './components/pages/Menus';
import PricingBoxes from './components/pages/PricingBoxes';

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
            <Route exact path="/Button" component={Button}/>
            <Route exact path="/Cards" component={Cards}/>
            <Route exact path="/Lists" component={Lists}/>
            <Route exact path="/Menus" component={Menus}/>
            <Route exact path="/PricingBoxes" component={PricingBoxes}/>
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
    "flex": 10.5
  }
}

export default App;
