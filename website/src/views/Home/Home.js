import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { BrowserRouter as Router} from 'react-router-dom';
import Reviewcard from '../../components/ReviewCard/ReviewCard'

function Home() {
  return (
    <div className="home">
      <Router>
        <NavBar />
        <h1>Home</h1>
      </Router>
      <Reviewcard />
    </div>
  );
}

export default Home;
