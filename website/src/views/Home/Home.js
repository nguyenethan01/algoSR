import React, { Component } from 'react';
import axios from 'axios';
import NavBar from '../../components/NavBar/NavBar';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import './Home.css'

class Home extends Component {

  constructor(props) {
    super();
    // console.log('home props', props);
		this.state = {
      isLoading: true,
			id: props.match.params.id,
      username: '',
      questions: [],

		}
  }

  componentDidMount() {
    axios.get('http://localhost:5000/questions/' + this.props.match.params.id)
        .then(response => {

          console.log('api called')
            if (response.data) {
              console.log('response', response);
              
              this.setState({
                isLoading: false,
                username: response.data.username,  
                questions: response.data.questions
              })
            }
            console.log('STATE', this.state);
        });
  }

  render() {
    if (this.state.isLoading) {
      return (  
        <div className="homepage">
          <NavBar currentUser={this.state.username} id={this.state.id} />
        </div>
      );  
    }

    return (
      
      <div className="homepage">
        <NavBar currentUser={this.state.username} id={this.state.id} />
        <div className="home">
        <ReviewCard info={this.state.questions} />
        </div>
      </div>
    );
  }
}

export default Home;
