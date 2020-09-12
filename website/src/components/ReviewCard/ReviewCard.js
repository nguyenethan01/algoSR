import React from 'react';
import './ReviewCard.css'

function ReviewCard(){
  return(
    <div className="reviewCard">
      <h1>
        123. Two Sum
      </h1>
      <button class="btn-primary">Practice</button>
      <p className="notes">
        <br/>
        Notes:
        <br/>
        - Use a dictionary
        <br/>
        - O(n) runtime!
      </p>
      <div className="easy-medium-hard">
        <button className="btn-success">Easy</button>
        <button className="btn-warning">Medium</button>
        <button className="btn-error">Hard</button>
      </div>
    </div>

  );
} 
export default ReviewCard 
