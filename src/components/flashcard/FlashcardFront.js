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
          <h1>{this.state.word}</h1>
    );
  }
}

export default FlashcardFront;