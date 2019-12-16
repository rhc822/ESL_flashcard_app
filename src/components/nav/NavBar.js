import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './NavBar.css'

class NavBar extends Component {

  render(){

    return (
        <nav>
          <ul className="container">
            <li><Link className="nav-link" to="/flashcard/create">Create Flashcard</Link></li>
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