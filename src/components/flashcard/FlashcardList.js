import React, { Component } from 'react'
import Flashcard from './Flashcard'
import AppData from '../../modules/AppData'

class FlashcardList extends Component {
  state = {
    flashcard: [],

  }



  componentDidMount() {
    AppData.getFlashcard(this.props.categoryId)
      .then((AppDataFlashcardArray) => {
        this.setState({
          flashcard: AppDataFlashcardArray
        })
      })
  }

  /* This section maps through the flashcard list and builds each flashcard with the flashcard  */

  render() {
    console.log("flashcardlist.js state stuff", this.state)
    return (
      <div className="container-cards">
        {this.state.flashcard.map(eachFlashcard =>
            <Flashcard
                key={eachFlashcard.id}
                userId={eachFlashcard.userId}
                word={eachFlashcard.word}
                id={eachFlashcard.id}
            />
        )}
      </div>
    )
  }
}

export default FlashcardList