import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

export default class Auth extends Component {

  state = {
    isSignUp: true
  }
  
  render() {
    return (
      <form className="Auth">
        <h2 className="page-title">Sign up</h2>

        <fieldset>
          <label>
            Username:
            <input/>
          </label>
          <label>
            Email:
            <input/>
          </label>
          <label>
            Password:
            <input/>
          </label>
          <button type="submit">Create Account</button>
        </fieldset>

        <label>Already have an account?<button>Sign in</button></label>

        <Link to='/'><button>home</button></Link>
      </form>
    );
  }

}