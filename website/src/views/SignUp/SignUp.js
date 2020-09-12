import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

function SignUp() {
  return (
    <div className="signup">
      <h1> Sign Up </h1>
      <form>
        <label for="email">Email: </label>
        <input type="text" id="email" name="email" placeholder="email"></input>

        <label for="password">Password: </label>
        <input type="password" id="password" name="password" placeholder="password"></input>
        <button>Register</button>
      </form>
      <Link to='/home'>
        <p> Home </p>
      </Link>
    </div>
  );
}

export default SignUp;