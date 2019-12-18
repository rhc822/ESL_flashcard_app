import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './NavBar.css'

class NavBar extends Component {


  render(){

    return (
        <nav>
          <ul className="container">
            <li><Link to="/">Home</Link></li>
            {(this.props.isAuthenticated) ?
            <>
              <li><Link
                className="nav-link"
                to="/flashcard/create"
              >Create Flashcard
              </Link></li>
              <li>Clear checkboxes</li>
              <li><Link
                className="nav-link"
                to="/category"
              >Category Manager</Link></li>
            </>
            :
            <>
            <li><Link className="nav-link" to="/login">Login</Link></li>
            <hr/>
            </>
            }
          </ul>
        </nav>
    )
  }
}

export default NavBar;