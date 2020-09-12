import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className="signup">
      <h1> Sign Up </h1>
      <Link to='/home'>
        <p> Home </p>
      </Link>
    </div>
  );
}

export default SignUp;