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
}

handleFieldChange = evt => {
/*     console.log("Event target id", evt.target.id)
    console.log("Event target value", evt.target.value) */
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  constructNewFlashcard = evt => {
    evt.preventDefault();
    if (this.state.word === "") {
      window.alert("Please input a  word");
    } else {
      this.setState({ loadingStatus: true });
      const flashcard = {
        word: this.state.word,
        sentence: this.state.sentence,
        url: this.state.url
      };

      // Create the animal and redirect user to animal list
      AppData.post(flashcard)
        .then(() => this.props.history.push("/"));
    }
  };

  render() {
      console.log(this.state)
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
                        />
                    <div className="flashcardDefinition">

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