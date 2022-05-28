import React, { Component } from "react";

export default class NavbarItem extends Component {
  constructor(props) {
    super(props);
    this.name = props.item.key;
  }

  render() {
    console.log(this.props.item.selected);
    if (this.props.item.selected) {
      var activeStyle = {
        backgroundColor: "white"
      };
    }

    return (
      <li style={activeStyle} className="nav-item px-5 col-sm-3 nav-bar-item">
        <a
          className="nav-link"
          href="#"
          onClick={() => this.props.onChange(this.name)}
        >
          {this.name}
        </a>
      </li>
    );
  }
}
