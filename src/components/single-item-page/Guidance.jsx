import React, { Component } from "react";
export default class Guidance extends Component {
  constructor(props) {
    super(props);
    this.guidance = props.guidance;
  }

  render() {
    return (
      <div className="row justify-content-end p-5">
        <p className="text col-sm-8">{this.guidance}</p>
      </div>
    );
  }
}
