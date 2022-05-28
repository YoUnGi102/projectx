import React from "react";
import MethodList from "./MethodList";
import Logo from "./Logo";
import Header from "./Header";
import ChooseCategory from "./ChooseCategory";

export default class MethodsPage extends React.Component {
  constructor(props) {
    super(props);
    this.methods = props.methods;
    this.categories = props.categories;

    this.selectedCategories = [];
    this.methodList = (
      <MethodList
        methodsInfo={this.methodsInfo}
        selectedCategories={this.selectedCategories}
      />
    );
  }

  onCategoryChange = (categories) => {
    this.selectedCategories = categories;
  };

  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-3">
            <Logo />
          </div>
          <div className="col-9">
            <Header />
          </div>
        </div>

        {/* <div className="row">
          <div className="col-3">
            <CategoryList names={this.names} onChange={this.onCategoryChange} />
          </div>
          <div className="col-9">{this.methodList}</div>
        </div> */}

        <ChooseCategory categories={this.categories} methods={this.methods} />

        {/* <MethodList methodsInfo={methodsInfo} /> */}

        <div className="container">
          <div className="row"></div>
        </div>
      </div>
    );
  }
}
