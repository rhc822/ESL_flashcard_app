import React, { Component } from 'react';
import AppData from '../../modules/AppData';
import { Link } from "react-router-dom";



class CategoryManager extends Component {

state = {
  name: "",
  categoryId: "",
  loadingStatus: false,
  category: []
}

/* Gets all the categories to map through and puts them in the category array in state above. This is for use in the drop-down in the render section. */

componentDidMount() {
    AppData.getAllCategory(localStorage.getItem("userId"))
      .then((AppDataCategoryArray) => {
        this.setState({
          category: AppDataCategoryArray
        })
      })
  }

/* Gets the value of a given input field and sets the appropriate state with it. */
handleFieldChange = evt => {
    // console.log("Event target id", evt.target.id)
    //  console.log("Event target value", evt.target.value)
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

/* Upon hitting submit button in render section, this function runs and posts the content to the database. userId set to Number() ensures that the resulting value for the categoryId and userId keys are integers instead of strings. After posting, there are two .thens. Then first re-runs componentDidMount so the category list displays again with the latest addition. The second sets the input field value to an empty string. */
  constructNewCategory = evt => {
    evt.preventDefault();
    if (this.state.name === "") {
      window.alert("Please enter a category name");
    } else {
      this.setState({ loadingStatus: true });
      const newCategory = {
        name: this.state.name,
        userId: Number(localStorage.getItem("userId"))
      };
      AppData.postCategory(newCategory)
        .then(() => this.componentDidMount())
        .then(() => document.getElementById("name").value = "")

  };
  }

  /* {() => { this.props.history.push("/category/CategoryManager")}} */

  render() {
      return (
        <>
            <form className="w3-container w3-center" id="categoryForm">
              <div>
                <label
                  className="w3-margin"
                  htmlFor="name">
                    <strong>Create a category name: </strong>
                </label>
                <input
                  className="w3-margin"
                  style={{display:"inline"}}
                  type="text"
                  required
                  onChange={this.handleFieldChange}
                  id="name"
                  placeholder="Category Name"/>
              </div>
              <button
                className="w3-margin w3-button w3-round w3-black"
                onClick={this.constructNewCategory}>
                  Submit
              </button>
            </form>
            <hr />
            <div className="w3-container w3-center">
            {this.state.category.map(eachCategory => {
                return <>
                    <Link
                        className="w3-bar-item w3-margin w3-xlarge"
                        to={`/category/${eachCategory.id}/CategoryEdit`}
                        {...this.props}
                    ><span>{eachCategory.name}</span>
                    </Link>
                </>
                }
            )}
            </div>
        </>
    );
  }
}

export default CategoryManager;