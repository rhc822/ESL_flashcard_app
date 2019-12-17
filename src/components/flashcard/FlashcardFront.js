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
          <h1>{this.state.word}</h1>
          <button
            type="button"
            onClick={() => { this.props.history.push(`/flashcard/${this.props.flashcardId}/FlashcardEdit`) }}
          >Edit
          </button>
          <button
            type="button"
            onClick={() => this.props.deleteFlashcard(this.props.flashcardId)}
          >Delete
          </button>
          <Link
            className="card-flip"
            to={`/flashcard/${this.props.flashcardId}/FlashcardBack`}
          >
            Flip
          </Link>
        </>
    );
  }
}

export default FlashcardFront;