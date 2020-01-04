import React, { Component } from 'react';
import AppData from '../../modules/AppData'


class CategoryEdit extends Component {

state = {
  name: "",
  id: "",
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
      AppData.getIndividualCategory(this.props.categoryId)
      .then((category) => this.setState({
          id: category.id,
          userId: category.userId,
          name: category.name,
      })
      )
  }

/* Gets the value of a given input field and sets the appropriate state with it. */

handleFieldChange = evt => {
    // console.log("Event target id", evt.target.id)
    //  console.log("Event target value", evt.target.value)
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

/* Upon hitting submit button in render section, this function runs and posts the content to the database. Number() ensures that the resulting value for the categoryId and userId keys are integers instead of strings. */


  editCategory = evt => {
    evt.preventDefault();
    if (this.state.name === "") {
      window.alert("Please enter a category name");
    } else {
      this.setState({ loadingStatus: true });
      const editedCategory = {
        name: this.state.name,
        id: this.state.id,
        userId: Number(localStorage.getItem("userId"))
      };
      this.props.updateExistingCategory(editedCategory)
    }
}

  render() {
      return (
        <>
            <form className="w3-container w3-center" onSubmit={this.editCategory}>
              <div>
                <label
                  className="w3-margin w3-xlarge"
                  htmlFor="name">
                    <strong>Modify the category name:</strong>
                </label>
                <input
                  className="w3-margin w3-xlarge"
                  style={{display:"inline"}}
                  type="text"
                  required
                  onChange={this.handleFieldChange}
                  id="name"
                  placeholder="Category Name"
                  value={this.state.name}
                />
              </div>
              <button
                  className="w3-margin w3-button w3-round w3-black"
                  type="button"
                  onClick={() => this.props.deleteCategory(this.props.categoryId)}>
                      Delete
              </button>
                  <button
                      className="w3-margin w3-button w3-round w3-black"
                      type="submit"
                      disabled={this.state.loadingStatus}
                  > Submit
                  </button>
            </form>
        </>
    )}
}

export default CategoryEdit;