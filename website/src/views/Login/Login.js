import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login">
      <h1> Login </h1>
      <Link to='/home'>
        <p> Home </p>
      </Link>
    </div>
  );
}

export default Login;
