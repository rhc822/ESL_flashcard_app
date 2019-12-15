import React, { Component } from 'react';
import AppData from '../../modules/AppData'
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
            console.log(flashcardInfo)
            this.setState({
              word: flashcardInfo.word,
              sentence: flashcardInfo.sentence,
              url: flashcardInfo.url,
              definition: flashcardInfo.definition
            });
          });
      }

  render() {
    console.log("Props of this component", this.props.flashcardId)
    console.log("State of this componenet", this.state)
      return (
        <>
          <h1>{this.state.word}</h1>
          <button>Edit</button>
          <button>Delete</button>
          <a href="./FlashcardBack">Flip</a>
        </>
    );
  }
}

export default FlashcardFront;