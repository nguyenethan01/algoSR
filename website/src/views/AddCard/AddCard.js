import React, {Component} from 'react';
import axios from 'axios';
import NavBar from '../../components/NavBar/NavBar';
import './AddCard.css';

class AddCard extends Component{

  constructor() {
    super()
    this.state = {
        title: '',
        url: '',
        comments: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
}
  handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log('handleSubmit')

    axios
        .post('http://localhost:5000/questions/' + this.props.match.params.id, {
            title: this.state.title,
            url: this.state.url,
            comments: this.state.comments,
            currentDate: new Date()
        })
        .then(response => {
            console.log('add_card response: ');
            console.log(response);
  
        }).catch(error => {
            console.log('add_card error: ')
            console.log(error);
            
        })
}



render(){
  return (
    <div className = "add-page">
      <NavBar />
      <div className="add-card">
      <div class="form-group">
        <label class="form-label" for="input-example-1">Question Title</label>
        <input class="form-input" onChange={this.handleChange} name="title" type="text" id="input-example-1" placeholder="Title"></input>
        <label class="form-label" for="input-example-1">Question URL</label>
        <input class="form-input" onChange={this.handleChange} name="url" type="text" id="input-example-1" placeholder="URL"></input>
        <label class="form-label" for="input-example-1">Notes</label>
        <input class="form-input" onChange={this.handleChange} name="comments" type="text" id="input-example-1" placeholder="Notes"></input>
      </div>
      <button type="button" className = "add-button">Submit</button>
      </div>
    </div>
  );
}
}
export default AddCard;