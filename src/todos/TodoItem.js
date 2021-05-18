import React, { Component } from 'react';
import { completeTodo, shareTodo } from '../utils';
import './TodoItem.css';

export default class TodoItem extends Component {

  state = {
    shared: this.props.todo.shared
  }

  handleComplete = async e => {
    const todo = {
      id: this.props.todo.id,
      completed: e.target.checked
    };    
    await completeTodo(todo);
  }

  handleShare = async e => {
    e.preventDefault();

    const todo = {
      id: this.props.todo.id,
      shared: !this.state.shared
    };
    const resp = await shareTodo(todo);

    this.setState({ shared: !this.state.shared });
    if (resp.shared) e.target.classList.add('shared');
    else e.target.classList.remove('shared');    
  }

  render() {
    const { todo, onDelete } = this.props;
    return (
      <li className="TodoItem">

        <input onClick={this.handleComplete} defaultChecked={todo.completed} type="checkbox" value={todo.id}/>
        <span>{todo.task}</span>
        <span>
          <button className="delete-button" onClick={onDelete} value={todo.id}>🗑️</button>
          <button className={'share-button' + ((this.state.shared) ? ' shared' : '')} onClick={this.handleShare} value={todo.id}>🔓</button>
        </span>

      </li>
    );
  }
}
