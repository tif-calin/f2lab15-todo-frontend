import { Component } from 'react';
import { Link } from 'react-router-dom';
import { signIn, signUp } from '../utils';
import './Auth.css';

export default class Auth extends Component {

  state = {
    isSignUp: false,
    name: '',
    email: '',
    password: '',
    error: ''
  }

  handleSwitch = e => {
    e.preventDefault();
    this.setState({ isSignUp: !this.state.isSignUp });
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { onUser, history } = this.props;

    try {
      const { name, email, password } = this.state;

      const user = {
        name: name,
        email: email,
        password: password
      };

      if (this.state.isSignUp) await signUp(user);
      const resp = await signIn(user);
      onUser(resp);
      history.push('/todos');
    }
    catch (err) {
      this.setState({ error: err.message });
    }
    
  }

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  }

  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  }
  
  render() {
    const { isSignUp } = this.state;

    return (
      <form className="Auth" onSubmit={this.handleSubmit}>
        <h2 className="page-title">Sign {(isSignUp) ? 'up' : 'in'}</h2>

        <fieldset>
          <label>
            Username:
            <input required onChange={this.handleNameChange}/>
          </label>
          {isSignUp && 
            <label>
              Email:
              <input onChange={this.handleEmailChange}/>
            </label>
          }
          <label>
            Password:
            <input type="password" required onChange={this.handlePasswordChange}/>
          </label>
          <button type="submit">{(isSignUp) ? 'Create Account' : 'Sign In'}</button>
        </fieldset>

        <label>{(isSignUp) ? 'Already' : 'Don\'t'} have an account?<button onClick={this.handleSwitch}>Sign {(isSignUp) ? 'in' : 'up'}</button></label>

        <Link to='/'><button>home</button></Link>
      </form>
    );
  }

}