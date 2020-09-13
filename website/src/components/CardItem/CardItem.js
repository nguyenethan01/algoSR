import React from 'react';
import './CardItem.css'

function CardItem(props){
  return(
    <div className="cardItem">
      <h3 className="carditem-title">{props.title}</h3>
      <div className="right">
        <p className="carditem-last-reviewed">
          Last Reviewed: {props.lastReviewed}
        </p>
      </div>
    </div>
  );
}

export default CardItem;