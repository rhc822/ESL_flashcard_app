import React, { Component } from 'react';

class Flashcard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <p>{this.props.word}</p>
        </div>
      </div>
    );
  }
}

export default Flashcard;