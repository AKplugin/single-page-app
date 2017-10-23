import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class NavList extends Component {

  constructor(props) {
     super(props)
     this.hoverFunction = this.hoverFunction.bind(this);
  }

  hoverFunction(){
  }
  render() {

    return (
      <div>
        <h5 className="titleHeader">{this.props.name}</h5>
        {
          this.props.data.map((data) => {
            return <li className="subTitles" onMouseEnter={this.hoverFunction} Link to="/home">{data.name}</li>;
          })
        }
      </div>
    );
  }
}

export default NavList;
