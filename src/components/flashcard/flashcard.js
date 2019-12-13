import React, { Component } from 'react';
import './Flashcard.css'


class Flashcard extends Component {
  render() {
    console.log("flashcard.js props", this.props)
      return (
    <div className="card">
        <div className="card-content">
          <input type="checkbox" name={`flashcard${this.props.id}`} value=""></input>
          <span>{this.props.word}</span>
        </div>
      </div>
    );
  }
}

export default Flashcard;