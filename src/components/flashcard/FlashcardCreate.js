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
          <div className="w3-display-container w3-panel w3-margin w3-card-2 w3-center w3-display-middle">
            <form>
                <fieldset>
                    <div>
                        <label htmlFor="word"></label>
                        <h1><input
                            type="text"
                            required
                            onChange={this.handleFieldChange}
                            id="word"
                            placeholder="Word"/></h1>
                        <br />
                        <label className="w3-left w3-margin" htmlFor="sentence"><strong>Sentence: </strong></label>
                        <input
                          className="w3-margin w3-left"
                          type="text"
                          onChange={this.handleFieldChange}
                          id="sentence"
                          placeholder="Enter the sentence"/>
                        <br />
                        <label className="w3-left w3-margin" htmlFor="url"><strong>Website: </strong></label>
                        <input
                          className="w3-margin w3-left"
                          type="text"
                          onChange={this.handleFieldChange}
                          id="url"
                          placeholder="Enter the URL"/>
                        <br />
                        <label className="w3-left w3-margin" htmlFor="definition"><strong>Definition: </strong></label>
                        <textarea
                          className="w3-margin w3-left"
                          rows="5"
                          cols="40"
                          type="text"
                          onChange={this.handleFieldChange}
                          id="definition"
                          placeholder="Enter the definition"/>
                        <br />
                        <label className="form-control w3-left w3-margin" htmlFor="category"><strong>Category: </strong></label>
                        <select
                          className="form-control w3-margin w3-left"
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
                    <div>
                        <button
                          className="w3-margin w3-button w3-round w3-black w3-left"
                          type="button"
                          onClick={this.constructNewFlashcard}
                          disabled={this.state.loadingStatus}>
                            Submit
                        </button>
                    </div>
                </fieldset>
            </form>
          </div>
        </>
    );
  }
}

export default FlashcardCreate;