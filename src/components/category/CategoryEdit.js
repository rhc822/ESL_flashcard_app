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
            <form onSubmit={this.editCategory}>
                <fieldset>
                    <div>
                        <label htmlFor="name">Modify the category name</label>
                        <input
                            type="text"
                            required
                            onChange={this.handleFieldChange}
                            id="name"
                            placeholder="Category Name"
                            value={this.state.name}
                        />
                    </div>
                    <br />
                    <button
                        type="button"
                        onClick={() => this.props.deleteCategory(this.props.categoryId)}>
                            Delete
                    </button>
                    <div className="categoryNewSubmitButton">
                        <button
                            type="submit"
                            disabled={this.state.loadingStatus}
                        > Submit
                        </button>
                    </div>
                </fieldset>
            </form>
        </>
    )}
}

export default CategoryEdit;