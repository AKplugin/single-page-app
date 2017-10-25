import React, { Component } from 'react';
import {
  NavLink
} from 'react-router-dom';

class NavList extends Component {

  constructor(props) {
     super(props)
  }

  renderChildren(){
    let childrenElement = [];
    console.log(this.prop)
    // if(this.prop.children){
    //     this.prop.children.map((data) => {
          childrenElement.push(<li>dataname</li>)
    //     }
    // }
    return childrenElement;
  }

  render() {


    return (
      <div>
        <h5 className="titleHeader">{this.props.name}</h5>
        {
          this.props.data.map((data) => {
            let getChildTag = this.renderChildren();

            return (
              <div>
              <div className="subTitles"><NavLink to={data.path}>{data.name}</NavLink></div>
              {}
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default NavList;
