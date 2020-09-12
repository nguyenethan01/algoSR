import React from 'react';
import './CardItem.css'

function CardItem(){
  return(
    <div className="cardItem">
      <h3 className="carditem-title">123. Two Sum</h3>
      <div className="right">
        <p className="carditem-last-reviewed">
          Last Reviewed: Two Days Ago
        </p>
      </div>
    </div>
  );
}

export default CardItem;