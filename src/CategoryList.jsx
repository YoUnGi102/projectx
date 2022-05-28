import React from "react";
import CategoryItem from "./CategoryItem";

export default class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = props.onChange;

    this.state = {
      categories: props.categories
    };
  }

  resetList = () => {
    this.state.categories.filter((item) => {
      item.selected = false;
      return item;
    });
    this.handleCheckChange(null);
    this.forceUpdate();
  };

  handleCheckChange = (category) => {
    var selectedCategories = [];
    this.state.categories.forEach((item) => {
      if (category !== null && item.name === category.target.name) {
        if (item.selected) {
          item.selected = false;
        } else {
          item.selected = true;
        }
      }

      if (item.selected) {
        selectedCategories.push(item.name);
      }
    });
    this.onChange(selectedCategories);
  };

  render() {
    var itemsToShow = [];
    this.state.categories.forEach((item) => {
      itemsToShow.push(
        <CategoryItem
          name={item.name}
          selected={item.selected}
          handleChange={this.handleCheckChange}
        />
      );
    });

    return (
      <div className="CategoryList">
        {itemsToShow}
        <CategoryItem name="Reset Filter" handleChange={this.resetList} />
      </div>
    );
  }
}
