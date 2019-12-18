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
            <h1>{this.state.word}</h1>
            <p><strong>Sentence: </strong>{this.state.sentence}</p>
            <p><strong>Website: </strong>{this.state.url}</p>
            <p><strong>Definition: </strong>{this.state.definition}</p>
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
            to={`/flashcard/${this.props.flashcardId}`}
            >Flip
            </Link>
        </>

    );
  }
}

export default FlashcardBack;