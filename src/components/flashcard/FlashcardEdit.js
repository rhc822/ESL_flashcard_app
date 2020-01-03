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
    console.log("Event target id", evt.target.id)
    console.log("Event target value", evt.target.value)
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
            <div className="w3-display-container w3-panel w3-margin w3-card-2 w3-center w3-display-middle">
                <form>
                    <fieldset>
                        <label htmlFor="word"></label>
                        <h1><input
                            type="text"
                            required
                            onChange={this.handleFieldChange}
                            id="word"
                            placeholder="Word"
                            value={this.state.word}/></h1>
                        <br />
                        <label className="w3-left w3-margin" htmlFor="sentence"><strong>Sentence: </strong></label>
                        <input
                            className="w3-margin w3-left"
                            type="text"
                            onChange={this.handleFieldChange}
                            id="sentence"
                            placeholder="Sentence"
                            value={this.state.sentence}/>
                        <br />
                        <label className="w3-left w3-margin" htmlFor="url"><strong>Website: </strong></label>
                        <input
                            className="w3-margin w3-left"
                            type="text"
                            onChange={this.handleFieldChange}
                            id="url"
                            placeholder="URL"
                            value={this.state.url}/>
                        <br />
                        <label className="w3-left w3-margin" htmlFor="definition"><strong>Definition: </strong></label>
                        <textarea
                            className="w3-margin w3-left"
                            rows="5"
                            cols="40"
                            type="text"
                            onChange={this.handleFieldChange}
                            id="definition"
                            placeholder="Enter the definition"
                            value={this.state.definition}/>
                        <br />
                        <label className="form-control w3-left w3-margin" htmlFor="category"><strong>Category: </strong></label>
                        <select
                            className="form-control w3-margin w3-left"
                            onChange={this.handleFieldChange}
                            id="categoryId"
                            value={this.state.categoryId}>
                                {this.state.category.map(eachCategory =>
                                    <option
                                        key={eachCategory.id}
                                        value={eachCategory.id}
                                    >
                                        {`${eachCategory.name}`}
                                    </option>
                                )}
                        </select>
                        <br />
                        <button
                            type="button"
                            className="w3-margin w3-button w3-round w3-black w3-left"
                            onClick={this.handleSubmit}
                            disabled={this.state.loadingStatus}>
                                Submit
                        </button>
                    </fieldset>
                </form>
            </div>
        </>
    );
  }
}

export default FlashcardEdit;