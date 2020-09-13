import React, { Component } from 'react';
import './ReviewCard.css'

class ReviewCard extends Component {

  constructor(props) {

    console.log(props)
    super();
    this.state = {
      index: 0,
      numOfCards: props.info.length,
      questions: props.info
    }

    this.buttonClicked = this.buttonClicked.bind(this)
  }

  buttonClicked() {
    this.setState({
      index: this.state.index + 1
    });
  }

  render() {
    
    if (this.state.index < this.state.numOfCards) {
      return(
        <div className="reviewCard">
          <h1>
            {this.state.questions[this.state.index].title}
          </h1>
          <button className="btn-primary">Practice</button>
          <div className="notes" >
            <p>Notes:</p>
            <p>
              {this.state.questions[this.state.index].comments}
            </p>
          </div>
          <div className="easy-medium-hard">
            <button onClick={this.buttonClicked} className="btn-success">Easy</button>
            <button onClick={this.buttonClicked} className="btn-warning">Medium</button>
            <button onClick={this.buttonClicked} className="btn-error">Hard</button>
          </div>
        </div>
      );
    } else {
      return(
        <div className="no-card">
            <h2>You're all out of questions for today!</h2>
        </div>
      )
    }
  }
 
} 
export default ReviewCard 
