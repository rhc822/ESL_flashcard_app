import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import MainView from './Main/MainView'
import FlashcardFront from './flashcard/FlashcardFront'
import FlashcardBack from './flashcard/FlashcardBack'

/* Contains the routes for various "webpage" links */

class ApplicationView extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <MainView {...props}/>
        }} />

{/*

Here's how flashcardId works(\d+):

1) User clicks on a given flashcard
2) This URL path matches the line below (because of the (\d+) regex thing, it’s only looking for a number)
3) This runs FlashcardFront detail component and passes the given number into it as a prop called flashcardId (but could be called anything)
4) When this component runs, the ComponentDidMount thing runs (this is the portion that actually does the get from the database)
5) The component completes and renders the appropriate animal in animal detail

*/}

        <Route exact path="/flashcard/:flashcardId(\d+)" render={(props) => {
          return <FlashcardFront
                    flashcardId={parseInt(props.match.params.flashcardId)}
                    {...props}
                    />
        }} />

        <Route exact path="/flashcard/:flashcardId(\d+)/FlashcardBack" render={(props) => {
          return <FlashcardBack
                    flashcardId={parseInt(props.match.params.flashcardId)}
                    {...props}
                    />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationView