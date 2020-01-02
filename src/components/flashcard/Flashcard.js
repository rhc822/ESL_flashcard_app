import React, { Component } from 'react';
import './Flashcard.css'



class Flashcard extends Component {
  render() {
      return (
    <div className="card" onClick= {() =>
      { this.props.history.push(`/flashcard/${this.props.id}`)}
      }>
        <div className="w3-panel w3-margin w3-card-2 w3-left">
          <input type="checkbox" name={`flashcard${this.props.id}`} value=""></input>
          <h1>    {this.props.word}</h1>
        </div>
      </div>
    );
  }
}

export default Flashcard;