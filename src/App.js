import React, { Component } from 'react';
import './App.css';
import NavBar from './components/nav/NavBar'
import ApplicationViews from './components/ApplicationView';

/* The top-level of the app that renders the navigation bar and the application views (or routes) */

class App extends Component {

render() {
  return (
    <>
      <NavBar />
      <ApplicationViews />
    </>
  )
}
}

export default App;
