import React from "react";

export default class Item extends React.Component {
  render() {
    return <h1>{this.props.value}</h1>;
  }
}
