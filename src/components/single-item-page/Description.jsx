import React, { Component } from "react";

export default class Description extends Component {
  constructor(props) {
    super(props);
    this.description = props.description;
  }

  render() {
    return (
      <div className="row justify-content-end p-5">
        <p className="text col-sm-8">{this.description}</p>
      </div>
    );
  }
}
