import React, { Component } from 'react';
import axios from 'axios';
import NavBar from '../../components/NavBar/NavBar';
import CardItem from '../../components/CardItem/CardItem'
import './ViewCards.css'

class ViewCards extends Component {

  constructor(props) {
    super(props);
    // console.log('props', props);
		this.state = {
			id: this.props.match.params.id,
      username: '',
      questions: [],

		}
  }

  componentDidMount() {
    axios.get('http://localhost:5000/questions/' + this.props.match.params.id)
        .then(response => {
            if (response.data) {
              console.log('response', response);
              
              this.setState({
                username: response.data.username,  
                questions: response.data.questions
              })
            }
            console.log('state', this.state);
        });
  }

  render() {
    return (
      <div>
        <NavBar currentUser={this.state.username} id={this.state.id}/>
        <div className="carditems">
          {
            this.state.questions.map((card) => {
              return <CardItem key={card._id} title={card.title} lastReviewed={card.dateToReview} />
            })
          }
        </div>
      </div>
    );  
  }

}
export default ViewCards;