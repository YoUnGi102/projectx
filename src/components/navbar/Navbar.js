import React, { Component } from "react";
import NavbarItem from "./NavbarItem";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.items = props.items;

    this.state = {
      navbarItems: [
        {
          key: "Description",
          selected: true
        },
        {
          key: "Guidance",
          selected: false
        },
        {
          key: "Sources",
          selected: false
        },
        {
          key: "Downloads",
          selected: false
        }
      ]
    };
  }

  onNavbarItemClicked = (name) => {
    this.setState({
      navbarItems: this.state.navbarItems.filter((item) => {
        if (item.key === name) {
          item.selected = true;
        } else {
          item.selected = false;
        }
        return item;
      })
    });
    console.log(this.props.onNavItemClicked(name));
  };

  render() {
    console.log("Navbar");
    console.log(this.onNavbarItemClicked);

    var itemsToShow = [];
    this.state.navbarItems.forEach((item) => {
      itemsToShow.push(
        <NavbarItem
          key={item.key}
          item={item}
          onChange={this.onNavbarItemClicked}
        />
      );
    });

    return (
      <nav class="navbar navbar-expand-lg navbar-light">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul className="navbar-nav d-flex justify-conten-between">
          {itemsToShow}
        </ul>
        <div className="collapse navbar-collapse" id="navbarNav"></div>
      </nav>
    );
  }
}
