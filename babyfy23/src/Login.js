import React, { useState } from 'react';
import './Login.css';
import logo from "./Pictuers/Pink and Purple Minimalist Baby and Toys Logo .png";
import { Link, useHistory } from "react-router-dom"; 
import { auth } from './firebase';

function Login() {
      const history = useHistory();
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');

      const SignIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
              history.push('/')
            })
            .cath(error => alert(error.message))
        //firebase login
      }

      const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
              // it successfully created a new user with email and password
        
              if (auth) {
                  history.push('/')
              }
            })
            .cath(error => alert(error.message))

        //firebase register
      }

    return (
    <div className="login">
      <Link to = '/'>
      <img className="login__logo" src={logo}  />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input type='text' value={email} onChange=
          {e => setEmail(e.target.value)} />
           

          <h5>Password</h5>
          <input type='password' value={password} onChange=
          {e => setPassword(e.target.value)} />

          <button type='submit' onClick={SignIn} className="login__signInButton">Sign In</button>
        </form>
        <p>
            By signing in you agree to BABY-FY's
            Condition of Use & Sale. Please 
            see our Privacy Notice, our Cookies Notice 
            and our Interest-Based Ads Notice.
        </p>

        <button onClick={register} className="login__registerButton">Create your BABY-FY Account</button>
      </div>
    </div>
  )
}

export default Login