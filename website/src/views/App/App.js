import React from 'react';
import './App.css';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path='/' exact component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={SignUp} />
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
    <Link to='/signup'>
      <p> Sign Up </p>
    </Link>
    <Link to='/login'>
      <p> Log In </p>
    </Link>
  </div>
);



export default App;
