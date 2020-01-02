import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './NavBar.css'

class NavBar extends Component {

/* THIS WAS THE INITIAL CODE FROM THE NAVBAR

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
      to=""
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
 */

/* The ternary "... ? ... : ..." below displays certain NavBar stuff (the first <></> ) by using this.props.isAuthenticated. If user is not logged in, go to Login screen. */

  render(){

    return (
        <nav>
          {(this.props.isAuthenticated()) ?
            <>
              <div class="w3-bar w3-black w3-xlarge">
                <a href="/" class="w3-bar-item w3-button w3-mobile"><i class="fas fa-home"></i>  Home</a>
                <a href="/flashcard/create" class="w3-bar-item w3-button w3-mobile"><i class="far fa-file-alt"></i>  Create Flashcard</a>
                <a href="/category/CategoryManager" class="w3-bar-item w3-button w3-mobile"><i class="fas fa-sitemap"></i>  Category Manager</a>
              </div>
            </>
            :
            <>
              <Link
                className="nav-link"
                to="/login"
              ></Link>
            </>
          }
        </nav>
    )
  }
}

export default NavBar;