import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import MainView from './Main/MainView'

/* Contains the routes for various "webpage" links */

class ApplicationView extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <MainView />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationView