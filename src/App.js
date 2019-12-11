import React, { Component } from 'react';
import './App.css';
import NavBar from './components/nav/NavBar'
import ApplicationViews from './components/ApplicationView';



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
