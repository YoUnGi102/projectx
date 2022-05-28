import React, { Component } from "react";
import MethodItem from "./MethodItem";
import CategoryList from "./CategoryList";
import MethodList from "./MethodList";

export default class ChooseCategory extends Component {
  constructor(props) {
    super(props);
    this.categories = props.categories;
    this.allMethods = props.methods;
    this.state = {
      methods: this.allMethods,
      categories: []
    };

    var selectedCategories = [];
    this.categories.forEach((item) => {
      selectedCategories.push(item.name);
    });
    this.updateMethodList(selectedCategories);
  }

  updateMethodList = (categories) => {
    this.setState({
      methods: this.state.methods.filter(function (method) {
        if (categories.length === 0 || categories.includes(method.category)) {
          method.display = "inline-block";
        } else {
          method.display = "none";
        }
        return method;
      })
    });
  };

  createMethods = () => {
    this.allMethods.forEach((item) => {
      var newMethod = (
        <MethodItem
          category={item.category}
          description={item.description}
          href={item.href}
          visible={true}
        />
      );

      this.setState((prevState) => ({
        methods: [...prevState.method, newMethod]
      }));
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col-3">
          <CategoryList
            categories={this.categories}
            onChange={this.updateMethodList}
          />
        </div>
        <div className="col-9">
          <MethodList methods={this.state.methods} />
        </div>
      </div>
    );
  }
}
