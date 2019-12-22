import React, { Component } from 'react';
import AppData from '../../modules/AppData'
import './Flashcard.css'
import App from '../../App';


class FlashcardEdit extends Component {

state = {
    id: "",
    userId: "",
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
    AppData.getIndividualFlashcard(this.props.flashcardId)
      .then((flashcard) => this.setState({
          id: flashcard.id,
          userId: flashcard.userId,
          word: flashcard.word,
          sentence: flashcard.sentence,
          url: flashcard.url,
          definition: flashcard.definition,
          categoryId: flashcard.categoryId
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

/* When the Submit button is pressed, this function is run. HandleSubmit() basically takes the state (via a variable called editedEntry) and runs updateExistingFlashcard function (located in ApplicationView) */

handleSubmit = () => {
    const editedEntry = {
        id: this.state.id,
        userId: this.state.userId,
        word: this.state.word,
        sentence: this.state.sentence,
        url: this.state.url,
        definition: this.state.definition,
        categoryId: parseInt(this.state.categoryId),
    };
    this.props.updateExistingFlashcard(editedEntry)
}

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
                            value={this.state.word}
                        /><br />
                        <label htmlFor="sentence">Enter the sentence</label>
                        <input
                            type="text"
                            onChange={this.handleFieldChange}
                            id="sentence"
                            placeholder="Sentence"
                            value={this.state.sentence}
                        /><br />
                        <label htmlFor="url">Enter the URL</label>
                        <input
                            type="text"
                            onChange={this.handleFieldChange}
                            id="url"
                            placeholder="URL"
                            value={this.state.url}
                        /><br />
                        <label htmlFor="definition">Enter the Definition</label>
                        <input
                            type="text"
                            onChange={this.handleFieldChange}
                            id="definition"
                            placeholder="Enter the definition"
                            value={this.state.definition}
                        /><br />
                        <select
                            className="form-control"
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
                    <div className="flashcardEditSubmitButton">
                        <button
                            type="button"
                            onClick={this.handleSubmit}
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

export default FlashcardEdit;