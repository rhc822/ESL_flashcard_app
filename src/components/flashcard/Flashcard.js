import React, { Component } from 'react';
import './Flashcard.css'



class Flashcard extends Component {
  render() {
      return (
    <div className="card" onClick= {() =>
      { this.props.history.push(`/flashcard/${this.props.id}`)}
      }>
        <div className="w3-card">
          <input type="checkbox" name={`flashcard${this.props.id}`} value=""></input>
          <span>{this.props.word}</span>
        </div>
      </div>
    );
  }
}

export default Flashcard;