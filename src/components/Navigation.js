import React, { Component } from 'react';
import NavList from './widgets/NavList';

class Navigation extends Component {
  render() {

    const listedData = {
      navData: [{
          "name": "Forms",
          "path": '',
          "children": [{
            "name": "Input",
            "path": "Input"
          },{
            "name": "Button",
            "path": "Button"
          }]
        },{
          "name": "UI Elements",
          "path": "UIElements"
        }, {
          "name": "Components",
          "path": "Components"
        }, {
          "name": "Icons",
          "path": "Icons"
        }],
      miscellaneous: [{
          "name": "Pages",
          "path": "Pages"
        }]
    };

    return (
      <div>
        <NavList name="User Interface" data={listedData.navData}/>

        <NavList name="MISCELLANEOUS" data={listedData.miscellaneous} />

        <NavList name="Settings" data={[]}/>
      </div>
    );
  }
}

export default Navigation;
