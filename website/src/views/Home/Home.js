import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { BrowserRouter as Router} from 'react-router-dom';

function Home() {
  return (
    <Router>
      <NavBar />
      <h1>Home</h1>
    </Router>
  );
}

export default Home;
