import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import './Home.css'

function Home() {
  return (
    <div className="homepage">
      <NavBar />
      <div className='home'>
      <ReviewCard />
      </div>
    </div>
  );
}

export default Home;
