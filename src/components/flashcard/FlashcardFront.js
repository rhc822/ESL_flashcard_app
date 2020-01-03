import React, { Component } from 'react';
import AppData from '../../modules/AppData'
import { Link } from "react-router-dom";
import './Flashcard.css'


class FlashcardFront extends Component {

state = {
  word: ""
}

    componentDidMount() {

        AppData.getIndividualFlashcard(this.props.flashcardId)
          .then((flashcardInfo) => {
            this.setState({
              word: flashcardInfo.word
            });
          });
      }


  render() {
    console.log(this.state)
      return (
        <>
          <div className="w3-panel w3-margin w3-card-2 w3-center w3-display-middle">
            <h1>{this.state.word}</h1>
            <br />
            <button
              className="w3-margin"
              type="button"
              onClick={() => { this.props.history.push(`/flashcard/${this.props.flashcardId}/FlashcardEdit`) }}>
                Edit
            </button>
            <button
              className="w3-margin"
              type="button"
              onClick={() => this.props.deleteFlashcard(this.props.flashcardId)}>
                Delete
            </button>
            <br />
            <Link
              className="card-flip"
              to={`/flashcard/${this.props.flashcardId}/FlashcardBack`}>
                Flip
            </Link>
          </div>
        </>
    );
  }
}

export default FlashcardFront;