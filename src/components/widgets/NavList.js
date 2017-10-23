import React, { Component } from 'react';

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
            return <div className="subTitles" onMouseEnter={this.hoverFunction}>{data.name}</div>;
          })
        }
      </div>
    );
  }
}

export default NavList;
