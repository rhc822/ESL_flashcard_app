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


      AppData.post(flashcard)
        .then(() => this.props.history.push("/"));
    }
  };

  render() {
      return (
        <>
            <form>
                <fieldset>
                    <div>
                        <label htmlFor="word">Enter the word</label>
                        <input
                            type="text"
                            required
                            onChange={this.handleFieldChange}
                            id="word"
                            placeholder="Word"
                        /><br />
                        <label htmlFor="sentence">Enter the sentence</label>
                        <input
                            type="text"
                            onChange={this.handleFieldChange}
                            id="sentence"
                            placeholder="Sentence"
                        /><br />
                        <label htmlFor="url">Enter the URL</label>
                        <input
                            type="text"
                            onChange={this.handleFieldChange}
                            id="url"
                            placeholder="URL"
                        /><br />
                        <label htmlFor="definition">Enter the Definition</label>
                        <input
                            type="text"
                            onChange={this.handleFieldChange}
                            id="definition"
                            placeholder="Enter the definition"
                        /><br />
                        <select className="form-control"
                            onChange={this.handleFieldChange}
                            id="categoryId"
                            value={this.state.categoryId}
                        >
                        {this.state.category.map(eachCategory =>
                            <option
                                key={eachCategory.id}
                                value={eachCategory.id}
                            >
                                {`${eachCategory.name}`}
                            </option>
                        )}
                        </select>
                        <button
                            type="button"
                        >
                            Category Manager
                        </button>
                    </div>
                    <div className="flashcardNewSubmitButton">
                        <button
                            type="button"
                            onClick={this.constructNewFlashcard}
                            disabled={this.state.loadingStatus}
                        > Submit
                        </button>
                    </div>
                </fieldset>
            </form>
        </>
    );
  }
}

export default FlashcardCreate;