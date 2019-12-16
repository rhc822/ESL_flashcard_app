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

componentDidMount() {
    AppData.getAllCategory()
      .then((AppDataCategoryArray) => {
        this.setState({
          category: AppDataCategoryArray
        })
      })
  }

handleFieldChange = evt => {
    console.log("Event target id", evt.target.id)
 /*    console.log("Event target value", evt.target.value) */
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  constructNewFlashcard = evt => {
    evt.preventDefault();
    if (this.state.word === "") {
      window.alert("Please input a  word");
    } else {
        console.log(this.state.categoryId)
      this.setState({ loadingStatus: true });
      const flashcard = {
        word: this.state.word,
        sentence: this.state.sentence,
        url: this.state.url,
        categoryId: this.state.categoryId
      };


      AppData.post(flashcard)
        .then(() => this.props.history.push("/"));
    }
  };

  render() {
      console.log(this.state.category)
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