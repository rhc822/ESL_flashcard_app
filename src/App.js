import React, { Component } from 'react';
import './App.css';
import NavBar from './components/nav/NavBar'
import ApplicationViews from './components/ApplicationView';

/* The top-level of the app that renders the navigation bar and the application views (or routes) */

class App extends Component {


  // Check if credentials are in local storage (returns true/false)
  isAuthenticated = () => localStorage.getItem("userId") !== null

render() {
  return (
    <>
      <NavBar
        isAuthenticated={this.isAuthenticated}
      />
      <ApplicationViews
        isAuthenticated={this.isAuthenticated}
      />
    </>
  )
}
}

export default App;
