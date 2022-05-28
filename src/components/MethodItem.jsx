import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";
import { Link } from "react-router-dom";
import _ from "lodash";
import { HOME_ROUTE } from "../Constants";

export default class MethodItem extends Component {
  constructor(props) {
    super(props);
    this.category = props.methodInfo.category;
    this.title = props.methodInfo.title;
    this.display = props.methodInfo.display;
  }

  render() {
    return (
      <Link
        to={"/" + _.snakeCase(this.title)}
        style={{ display: this.props.methodInfo.display }}
        className="col-sm-4"
      >
        <div className="MethodItem">
          <div>
            <p className="category">{this.props.methodInfo.category + ":"}</p>
            <p className="description">{this.props.methodInfo.title}</p>
          </div>
        </div>
      </Link>
    );
  }
}
