import React, { Component } from 'react';
import './TodoItem.css';

export default class TodoItem extends Component {
  render() {
    const { todo, onDelete, onShare, onComplete } = this.props;
    return (
      <li className="TodoItem">

        <input onClick={onComplete} defaultChecked={todo.completed} type="checkbox" value={todo.id}/>
        <span>{todo.task}</span>
        <span>
          <button className="delete-button" onClick={onDelete} value={todo.id}>🗑️</button>
          <button className="share-button" onClick={onShare} value={todo.id}>🔓</button>
        </span>

      </li>
    );
  }
}
