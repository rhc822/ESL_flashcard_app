import React, { Component } from 'react'
import Flashcard from './Flashcard'
import AppData from '../../modules/AppData'

class FlashcardList extends Component {
  //define what this component needs to render
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


  render() {
    console.log(this.state)
    return (
      <div className="container-cards">
        {this.state.flashcard.map(eachFlashcard =>
            <Flashcard
                key={eachFlashcard.id}
                userId={eachFlashcard.userId}
                word={eachFlashcard.word}
            />
        )}
      </div>
    )
  }
}

export default FlashcardList