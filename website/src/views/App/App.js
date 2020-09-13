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
        <Route path='/addCard' component={AddCard} />
        <Route path='/viewCards/:id' component={ViewCards} />
      </Switch>
    </Router>
  );
}

const Landing = () => (
  <div>
    <h1>Landing Page</h1>
    <Link to='/signup'>
      <p> Sign Up </p>
    </Link>
    <Link to='/login'>
      <p> Log In </p>
    </Link>
  </div>
);



export default App;
