import React, { Component } from 'react';
import AppData from '../../modules/AppData'
import './Flashcard.css'


class FlashcardCreate extends Component {

state = {
  word: "",
  sentence: "",
  url: "",
  definition: "",
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

  constructNewFlashcard = evt => {
    evt.preventDefault();
    if (this.state.word === "") {
      window.alert("Please input a  word");
    } else {
      this.setState({ loadingStatus: true });
      const flashcard = {
        word: this.state.word,
        sentence: this.state.sentence,
        url: this.state.url,
        categoryId: Number(this.state.categoryId),
        definition: this.state.definition,
        userId: Number(localStorage.getItem("userId"))
      };


      AppData.postFlashcard(flashcard)
        .then(() => this.props.history.push("/"));
    }
  };

  render() {
      return (
        <>
            <form className="w3-card-2 w3-display-middle">
                <fieldset>
                    <div>
                        <label
                          htmlFor="word">
                        </label>
                        <h1><input
                            type="text"
                            required
                            onChange={this.handleFieldChange}
                            id="word"
                            placeholder="Word"/></h1>
                        <br />
                        <label
                          className="w3-block w3-margin-top"
                          htmlFor="sentence">
                            <strong>Sentence: </strong>
                        </label>
                        <textarea
                          rows="2"
                          cols="40"
                          className="w3-block"
                          type="text"
                          onChange={this.handleFieldChange}
                          id="sentence"
                          placeholder="Enter the sentence"/>
                        <br />
                        <label
                          className="w3-block"
                          htmlFor="url">
                            <strong>Website: </strong>
                        </label>
                        <textarea
                          rows="2"
                          cols="40"
                          className="w3-block"
                          type="text"
                          onChange={this.handleFieldChange}
                          id="url"
                          placeholder="Enter the URL"/>
                        <br />
                        <label
                          className="w3-block"
                          htmlFor="definition">
                            <strong>Definition: </strong>
                        </label>
                        <textarea
                          className="w3-block"
                          rows="5"
                          cols="40"
                          type="text"
                          onChange={this.handleFieldChange}
                          id="definition"
                          placeholder="Enter the definition"/>
                        <br />
                        <div className="w3-center">
                          <label
                            className="form-control w3-margin-right w3-margin-bottom w3-center"
                            htmlFor="category">
                              <strong>Category: </strong>
                          </label>
                          <select
                            className="form-control w3-center w3-margin-bottom"
                            onChange={this.handleFieldChange}
                            id="categoryId"
                            value={this.state.categoryId}>
                              <option>Select a category</option>
                                {this.state.category.map(eachCategory =>
                                  <option
                                      key={eachCategory.id}
                                      value={eachCategory.id}
                                  >
                                      {`${eachCategory.name}`}
                                  </option>
                          )}
                          </select>
                        </div>
                        <button
                          className="w3-button w3-round w3-black w3-block w3-margin-bottom"
                          type="button"
                          onClick={this.constructNewFlashcard}
                          disabled={this.state.loadingStatus}>
                            Submit
                        </button>
                    </div>
                </fieldset>
            </form>
        </>
    );
  }
}

export default FlashcardCreate;