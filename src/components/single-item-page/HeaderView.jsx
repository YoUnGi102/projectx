import React, { Component } from "react";
import Logo from "../Logo";
import Navbar from "../navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SingleMethodPage.css";

export default class SingleMethodPage extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.category = props.methodInfo.category;
    this.title = props.methodInfo.title;
    this.introduction = props.methodInfo.introduction;
    this.img = props.methodInfo.img;
  }

  render() {
    console.log("HeaderView");
    console.log(this.props.onNavItemClicked);

    return (
      <div className="HeaderView">
        <div className="row">
          <div className="col-sm-4">
            <Logo />
            <a href="google.com">Back to overview</a>
          </div>
          <div className="col-sm-8">
            <p class="category">{this.category}</p>
            <p class="title">{this.title}</p>
            <p class="introduction">{this.introduction}</p>
            <img
              src={this.img}
              alt={this.title}
              widht="500px"
              height="400px"
            ></img>

            <Navbar
              onNavItemClicked={this.props.onNavItemClicked}
              items={["Description", "Guidance", "Sources", "Downloads"]}
            />
          </div>
        </div>
      </div>
    );
  }
}
