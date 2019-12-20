import React, { Component } from 'react';
import AppData from '../../modules/AppData'


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

/* Upon hitting submit button in render section, this function runs and posts the content to the database. Number() ensures that the resulting value for the categoryId and userId keys are integers instead of strings. */

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

      AppData.post(newCategory)
        .then(() => this.props.history.push("/category/CategoryManager"));
    }
  };

  render() {
      return (
        <>
            <form onSubmit={this.constructNewCategory}>
                <fieldset>
                    <div>
                        <label htmlFor="name">Enter a category name</label>
                        <input
                            type="text"
                            required
                            onChange={this.handleFieldChange}
                            id="name"
                            placeholder="Category Name"/>
                    </div>
                    <br />
                    <div className="categoryNewSubmitButton">
                        <button
                            type="submit"
                            disabled={this.state.loadingStatus}
                        > Submit
                        </button>
                    </div>
                </fieldset>
            </form>
            <hr />
            <div>
            {this.state.category.map(eachCategory => {
                return <>
                    <input
                        type="checkbox"
                        name={`categoryId-${eachCategory.id}`}/>
                    <span>{eachCategory.name}</span>
                </>
                }
            )}
            </div>
        </>
    );
  }
}

export default CategoryManager;