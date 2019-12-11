import React, { Component } from 'react';
import './NavBar.css'

class NavBar extends Component {

  render(){

    return (
        <nav>
        <ul className="container">
          <li>Create Card</li>
          <li>Locations</li>
          <li>Clear checkboxes</li>
          <li>Category</li>
        </ul>
        <hr/>
      </nav>
    )
  }
}

export default NavBar;