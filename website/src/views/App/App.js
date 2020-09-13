import React from 'react';
import './App.css';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import Home from '../Home/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import AddCard from '../AddCard/AddCard';
import ViewCards from '../ViewCards/ViewCards';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Landing} />
        <Route path='/home/:id' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Route path='/addCard/:id' component={AddCard} />
        <Route path='/viewCards/:id' component={ViewCards} />
      </Switch>
    </Router>
  );
}

const Landing = () => (
  <div className="Landing">
    <h1 className="front-title">AlgoSR</h1>
    <p className="front-description">The future of technical interview prep</p>
    <div className="front-buttons">
    <div className="landing-sign-up">
    <Link to='/signup' >
      <p className="signupt"> Sign Up </p>
    </Link>
    </div>
    <div className="landing-log-in">
    <Link to='/login'>
      <p className="login"> Log In </p>
    </Link>
    </div>
    </div>
  </div>
);



export default App;
