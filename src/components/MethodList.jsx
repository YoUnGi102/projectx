import React from "react";
import MethodItem from "./MethodItem";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import _ from "lodash";
import Item from "./Item";

export default class MethodList extends React.Component {
  constructor(props) {
    super(props);
    this.methods = props.methods;
  }

  render() {
    var itemsToShow = [];
    this.methods.forEach((item) => {
      itemsToShow.push(<MethodItem methodInfo={item} />);
    });

    return (
      <div>
        {itemsToShow}
        <Link to={"toolbox/" + _.snakeCase("Hello world")} className="col-sm-4">
          <div className="MethodItem">
            <div>
              <p className="category">{"this.props.methodInfo.category:"}</p>
              <p className="description">{"this.props.methodInfo.method"}</p>
            </div>
          </div>
        </Link>
      </div>
    );

    // return <div className="row">{itemsToShow}</div>;
  }
}
