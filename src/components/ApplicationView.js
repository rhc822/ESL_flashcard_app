import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import App from '../App'

class ApplicationView extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <App />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews