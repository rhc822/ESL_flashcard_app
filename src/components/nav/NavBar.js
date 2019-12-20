import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './NavBar.css'

class NavBar extends Component {

/* The ternary "... ? ... : ..." below displays certain NavBar stuff (the first <></> ) by using this.props.isAuthenticated. If user is not logged in, go to Login screen. */

  render(){

    return (
        <nav>
          <ul className="container">
            {(this.props.isAuthenticated()) ?
            <>
              <li>
                <Link to="/"
                >Home
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  to="/flashcard/create"
                >Create Flashcard
                </Link>
              </li>
              <li>Clear checkboxes</li>
              <li>
                <Link
                className="nav-link"
                to="/category/CategoryManager"
                >Category Manager
                </Link>
              </li>
            </>
            :
            <>
            <li>
              <Link
                className="nav-link"
                to="/login"
                >Login
              </Link>
            </li>
            <hr/>
            </>
            }
          </ul>
        </nav>
    )
  }
}

export default NavBar;