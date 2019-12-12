import React, { Component } from 'react';

class Flashcard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h1>{this.props.flashcard.word}</h1>
        </div>
      </div>
    );
  }
}

export default Flashcard;