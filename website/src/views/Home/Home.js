import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import { BrowserRouter as Router} from 'react-router-dom';

function Home() {
  return (
    <div>
      <Router>
        <NavBar />
        <h1>Home</h1>
      </Router>
      <div>
        <ReviewCard />
      </div>
    </div>
  );
}

export default Home;
