import axios from 'axios';
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

  buttonClicked(event) {
    const question = this.state.questions[this.state.index]
    this.setState({
      index: this.state.index + 1
    });
    axios.put("http://localhost:5000/questions/" + this.state.questions[this.state.index]._id,
    {
      difficulty: event.target.name,
      timeDelta: question.timeDelta,
      previousAttempts: question.previousAttempts,
      difficultyHistory: question.difficultyHistory
    })
      .then(response=>{
        console.log(response);
      }) 
  }

  render() {
    
    if (this.state.index < this.state.numOfCards) {
      return(
        <div className="reviewCard">
          <h1>
            {this.state.questions[this.state.index].title}
          </h1>
          <a target="_blank" href={this.state.questions[this.state.index].url}>
            Practice
          </a>
          <div className="notes" >
            <p>Notes:</p>
            <p>
              {this.state.questions[this.state.index].comments}
            </p>
          </div>
          <h4>How hard did you find this question?</h4>
          <div className="easy-medium-hard">
            <button name="easy" onClick={this.buttonClicked} className="btn-success">Easy</button>
            <button name="medium" onClick={this.buttonClicked} className="btn-warning">Medium</button>
            <button name="hard" onClick={this.buttonClicked} className="btn-error">Hard</button>
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
