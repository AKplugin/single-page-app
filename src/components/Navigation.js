import React, { Component } from 'react';
import NavList from './widgets/NavList';

class Navigation extends Component {
  render() {

    const listedData = {
      navData: [
        {
          "name": "Forms"
        },{
          "name": "UI Elements"
        }, {
          "name": "Components"
        },
        {
          "name": "Forms"
        }],
      miscellaneous: [
        {
          "name": "Pages"
        }
      ]
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
