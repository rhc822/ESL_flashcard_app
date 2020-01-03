import React, { Component } from 'react';
import AppData from '../../modules/AppData'
import { Link } from "react-router-dom";
import './Flashcard.css'


class FlashcardBack extends Component {


    state = {
        word: "",
        sentence: "",
        url: "",
        definition: "",
        }

    componentDidMount() {

              AppData.getIndividualFlashcard(this.props.flashcardId)
                .then((flashcardInfo) => {
                  this.setState({
                    word: flashcardInfo.word,
                    sentence: flashcardInfo.sentence,
                    url: flashcardInfo.url,
                    definition: flashcardInfo.definition
                  });
                });
            }


  render() {
      console.log(this.props)
      return (
        <>
          <div className="w3-panel w3-margin w3-card-2 w3-center w3-display-middle">
            <h1>{this.state.word}</h1>
            <div className="w3-left-align">
              <p><strong>Sentence: </strong>{this.state.sentence}</p>
              <p><strong>Website: </strong>{this.state.url}</p>
              <p><strong>Definition: </strong>{this.state.definition}</p>
            </div>
            <button
              className="w3-margin w3-button w3-round w3-black"
              type="button"
              onClick={() => { this.props.history.push(`/flashcard/${this.props.flashcardId}/FlashcardEdit`) }}>
                Edit
            </button>
            <button
              className="w3-margin w3-button w3-round w3-black"
              type="button"
              onClick={() => this.props.deleteFlashcard(this.props.flashcardId)}>
                Delete
            </button>
            <br />
            <Link
              className="card-flip"
              to={`/flashcard/${this.props.flashcardId}`}>
                Flip
            </Link>
          </div>
        </>

    );
  }
}

export default FlashcardBack;