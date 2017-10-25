import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  NavLink, Switch
} from 'react-router-dom';

class Navigation extends Component {

  state = {
    appendChildren: [],
    listedData: [{
      "name": "Dashboard"
    },{
      "name": "User Interface",
      "children": [{
        "name": "Buttons",
        "path": "Button"
      },{
        "name": "Cards",
        "path": "Cards"
      },{
        "name": "Lists",
        "path": "Cards"
      },{
        "name": "Pricing Boxes",
        "path": "Cards"
      },{
        "name": "Menus",
        "path": "Cards"
      }]
    },{
      "name": "Tables",
      "children": [{
        "name": "Static Tables",
        "path": "Cards"
      },{
        "name": "Responsive Tables",
        "path": "Cards"
      }]
    },{
      "name": "Extra Pages",
      "children": [{
        "name": "Login Page",
        "path": "Cards"
      },{
        "name": "Sign Up Page",
        "path": "Cards"
      },{
        "name": "404 Page",
        "path": "Cards"
      },{
        "name": "Forgot Password",
        "path": "Cards"
      }]
    }]
  }

  render() {

    return (
      <div>
          {this.renderItems()}
      </div>
    );
  }

  renderItems = function(){
      this.state.listedData.map((data) => {
        this.state.appendChildren.push(<li className='parentHeader'>{data.name}</li>);
        if(data.children){
          data.children.map((data) => {
            this.state.appendChildren.push(<li className='childHeader'><NavLink to={data.path}>{data.name}</NavLink></li>);
          })
        }
      });
      return <ul className='navList'>{this.state.appendChildren}</ul>
  }
}

export default Navigation;
