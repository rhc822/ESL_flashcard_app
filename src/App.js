import React, { Component } from 'react';
import './App.css';
import NavBar from './components/nav/NavBar'
import ApplicationViews from './components/ApplicationView';

/* The top-level of the app that renders the navigation bar and the application views (or routes) */

class App extends Component {

  state = {
    user: false
  }

  // Check if credentials are in local storage
  //returns true/false
  isAuthenticated = () => sessionStorage.getItem("credentials") !== null

  setUser = (authObj) => {
    /*
      For now, just store the email and password that
      the customer enters into local storage.
    */
    sessionStorage.setItem(
      "credentials",
      JSON.stringify(authObj)
    )
    this.setState({
      user: this.isAuthenticated()
    });
  }

  componentDidMount(){
    this.setState({
      user: this.isAuthenticated()
    })
  }

render() {
  return (
    <>
      <NavBar
        isAuthenticated={this.isAuthenticated}
      />
      <ApplicationViews
        isAuthenticated={this.isAuthenticated}
        setUser={this.setUser}
      />
    </>
  )
}
}

export default App;
