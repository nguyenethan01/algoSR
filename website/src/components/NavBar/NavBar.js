import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';


function NavBar(props){
  return(
    <nav className="navbar">
      <h3 className="nav-logo">AlgoSR</h3>
      <ul className="right">
        <Link to="/home" className="nav-link">
          <li className="link-text" >Home</li>
        </Link>
        <Link to="/viewCards" className="nav-link">
          <li className="link-text">View Cards</li>
        </Link>
        <Link to="/addCard" className="nav-link">
          <li className="link-text" >Add Card </li>
        </Link>
        <h3 className="nav-name">Welcome Karen!</h3>
      </ul>
    </nav>
  )
}

export default NavBar;