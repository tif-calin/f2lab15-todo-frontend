import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default class Home extends Component {
  
  render() {
    return (
      <div className="Home">
        <h2 className="page-title">Home Page</h2>

        <Link to='/auth'>sign up / sign in</Link>
        <Link to='/todos/public'>see public todos</Link>
      </div>
    );
  }

}