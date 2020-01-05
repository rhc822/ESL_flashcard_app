import React, { Component } from 'react';
import './Flashcard.css'



class Flashcard extends Component {
  render() {
      return (
        <div
          className="w3-margin w3-card-2 w3-left"
          onClick= {() =>
            { this.props.history.push(`/flashcard/${this.props.id}`)}
            }>
          <h1 className="w3-margin">{this.props.word}</h1>
        </div>
    );
  }
}

export default Flashcard;