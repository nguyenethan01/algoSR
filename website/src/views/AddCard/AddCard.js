import React, {Component} from 'react';
import axios from 'axios';
import NavBar from '../../components/NavBar/NavBar';
import './AddCard.css';

class AddCard extends Component{

  constructor(props) {
    super()
    this.state = {
        id: props.match.params.id,
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
            comments: this.state.comments
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
      <NavBar currentUser={this.state.currentUser} id={this.state.id}/>
      <div className="add-card">
      <div className="form-group">
        <label className="form-label" htmlFor="input-example-1">Question Title</label>
        <input className="form-input" onChange={this.handleChange} name="title" type="text" id="input-example-1" placeholder="Title"></input>
        <label className="form-label" htmlFor="input-example-1">Question URL</label>
        <input className="form-input" onChange={this.handleChange} name="url" type="text" id="input-example-1" placeholder="URL"></input>
        <label className="form-label" htmlFor="input-example-1">Notes</label>
        <input className="form-input" onChange={this.handleChange} name="comments" type="text" id="input-example-1" placeholder="Notes"></input>
      </div>
      <button type="button" className = "add-button" onClick={this.handleSubmit} >Submit</button>
      </div>
    </div>
  );
}
}
export default AddCard;