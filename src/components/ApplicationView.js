import { Route, Link, withRouter, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import MainView from './Main/MainView'
import FlashcardFront from './flashcard/FlashcardFront'
import FlashcardBack from './flashcard/FlashcardBack'
import FlashcardCreate from './flashcard/FlashcardCreate'
import FlashcardEdit from './flashcard/FlashcardEdit'
import AppData from '../modules/AppData'
import Login from './auth/Login'


/* Contains the routes for various "webpage" links */

class ApplicationView extends Component {


  /* These functions are available for child components to use; namely, FlashcardFront and FlashcardBack. It's able to redirect to a different view with this.props.history.push because of the withRouter property from react-router-dom (and exported at the bottom) from chapter 14. */

  deleteFlashcard = (flashcardId) => {
    AppData.delete(flashcardId)
      .then(() => this.props.history.push("/"))
  }

/* updateExistingFlashcard receives the content (essentially the state) from FlashcardEdit and sends it to AppData to update the database. */

  updateExistingFlashcard = (editedEntry) => {
    this.setState({ loadingStatus: true });
    AppData.update(editedEntry)
    .then(() => this.props.history.push(`/flashcard/${editedEntry.id}`))
  }


  render() {
    return (
      <React.Fragment>

        <Route path="/login" render={(props) => {
          return <Login {...this.props}/>
        }} />

        <Route exact path="/" render={(props) => {
          if (this.props.isAuthenticated()) {
            return <MainView {...props} />
        } else {
          return <Login {...this.props}/>
        }
        }} />

        <Route exact path="/flashcard/create" render={(props) => {
          return <FlashcardCreate
                    {...props}
                  />
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
                    deleteFlashcard={this.deleteFlashcard}
                    {...props}
                    />
        }} />

        <Route exact path="/flashcard/:flashcardId(\d+)/FlashcardBack" render={(props) => {
          return <FlashcardBack
                    flashcardId={parseInt(props.match.params.flashcardId)}
                    deleteFlashcard={this.deleteFlashcard}
                    {...props}
                  />
        }} />

        <Route exact path="/flashcard/:flashcardId(\d+)/FlashcardEdit" render={(props) => {
          return <FlashcardEdit
                    flashcardId={parseInt(props.match.params.flashcardId)}
                    updateExistingFlashcard={this.updateExistingFlashcard}
                    {...props}
                  />
        }} />

      </React.Fragment>
    )
  }
}

export default withRouter(ApplicationView);