import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';


function NavBar(){
  return(
    <nav className="navbar">
      <h3 className="left">Logo</h3>
      <ul className="right">
        <Link to="/viewCards" className="nav-link">
          <li>View Cards</li>
        </Link>
        <Link to="/addCard" className="nav-link">
          <li>Add Card </li>
        </Link>
        <Link to="/home" className="nav-link">
          <li>Home</li>
        </Link>
        <h3 className="nav-name">Name</h3>
      </ul>
    </nav>
  )
}

export default NavBar;