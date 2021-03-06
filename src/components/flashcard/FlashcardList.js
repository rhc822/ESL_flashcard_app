import React, { Component } from 'react'
import Flashcard from './Flashcard'
import AppData from '../../modules/AppData'

class FlashcardList extends Component {
  state = {
    flashcard: [],

  }


  componentDidMount() {
    AppData.getFlashcard(this.props.categoryId, localStorage.getItem("userId"))
      .then((AppDataFlashcardArray) => {
        this.setState({
          flashcard: AppDataFlashcardArray
        })
      })
  }

  /* This section maps through the flashcard list and builds each flashcard with the flashcard */

  render() {
    return (
      <div className="w3-container w3-center">
        {this.state.flashcard.map(eachFlashcard =>
            <Flashcard
                key={eachFlashcard.id}
                userId={eachFlashcard.userId}
                word={eachFlashcard.word}
                id={eachFlashcard.id}
                {...this.props}
            />
        )}
      </div>
    )
  }
}

export default FlashcardList