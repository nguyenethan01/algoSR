import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './AddCard.css';

function AddCard(){
  return (
    <div className = "add-page">
      <NavBar />
      <div className="add-card">
      <div class="form-group">
        <label class="form-label" for="input-example-1">Question Title</label>
        <input class="form-input" type="text" id="input-example-1" placeholder="Title"></input>
        <label class="form-label" for="input-example-1">Question URL</label>
        <input class="form-input" type="text" id="input-example-1" placeholder="URL"></input>
        <label class="form-label" for="input-example-1">Notes</label>
        <input class="form-input" type="text" id="input-example-1" placeholder="Notes"></input>
      </div>
      <button type="button" className = "add-button">Submit</button>
      </div>
    </div>
  );
}
export default AddCard;