import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import CardItem from '../../components/CardItem/CardItem'
import './ViewCards.css'

function ViewCards(){
  return (
    <div>
      <NavBar />
      <div className="carditems">
        <CardItem/>
      </div>
    </div>
  );
}
export default ViewCards;