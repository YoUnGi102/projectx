import React from "react";
import "../styles.css";

export default class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.name = props.name;
    this.selected = props.selected;
    this.handleChange = props.handleChange;
  }

  handleChange = (item) => {
    this.handleChange(item);
  };

  render() {
    return (
      <div className="CategoryItem">
        <input
          className="checkbox"
          type="checkbox"
          name={this.props.name}
          onChange={this.handleChange}
          checked={this.props.selected}
        />
        <label className="name" htmlFor={this.name}>
          {this.name}
        </label>
      </div>
    );
  }
}
