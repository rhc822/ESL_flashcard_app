import React, { Component } from 'react';
import AppData from '../../modules/AppData'
import { Link } from "react-router-dom";
import './Flashcard.css'


class FlashcardFront extends Component {

state = {
  word: "",
  sentence: "",
  url: "",
  definition: ""
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
    console.log(this.state)
      return (
        <>
          <h1>{this.state.word}</h1>
          <button>Edit</button>
          <button>Delete</button>
          <Link
            className="card-flip"
            to={`/flashcard/${this.props.flashcardId}/FlashcardBack`}
            word={this.state.word}
          >
            Flip
          </Link>
        </>
    );
  }
}

export default FlashcardFront;