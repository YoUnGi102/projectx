import React, { Component } from "react";
import HeaderView from "./HeaderView";
import "./SingleMethodPage.css";
import Description from "./Description";
import Guidance from "./Guidance";
import Sources from "./Sources";
import Downloads from "./Downloads";
import Logo from "../Logo";
import Navbar from "../navbar/Navbar";
import { HOME_ROUTE } from "../../Constants";

export default class SingleMethodPage extends Component {
  constructor(props) {
    super(props);
    this.methodInfo = props.methodInfo;
    this.title = props.methodInfo.title;
    this.img = props.methodInfo.img;
    this.guidance = props.methodInfo.guidance;
    this.category = props.methodInfo.category;
    this.introduction = props.methodInfo.introduction;
    this.sources = props.methodInfo.sources;
    this.description = props.methodInfo.description;
    this.state = {
      currentView: "Description"
    };
  }

  onNavItemClicked = (name) => {
    this.setState({
      currentView: name
    });
  };

  render() {
    var viewToShow = null;
    console.log(this.state.currentView);
    switch (this.state.currentView) {
      case "Description":
        viewToShow = <Description description={this.description} />;
        break;
      case "Guidance":
        viewToShow = <Guidance guidance={this.guidance} />;
        break;
      case "Sources":
        viewToShow = <Sources />;
        break;
      case "Downloads":
        viewToShow = <Downloads />;
        break;
      default:
        viewToShow = <div>Error</div>;
    }

    return (
      <div className="SinglePage">
        <div className="HeaderView">
          <div className="row">
            <div className="col-sm-4">
              <Logo />
              <a href="/">Back to overview</a>
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
                onNavItemClicked={this.onNavItemClicked}
                items={["Description", "Guidance", "Sources", "Downloads"]}
              />
            </div>
          </div>
        </div>
        {viewToShow}
      </div>
    );
  }
}
