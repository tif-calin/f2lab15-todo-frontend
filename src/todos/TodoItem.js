import React, { Component } from 'react';
import './TodoItem.css';

export default class TodoItem extends Component {
  render() {
    const { todo, onDelete, onComplete } = this.props;
    return (
      <li className="TodoItem">

        <input onClick={onComplete} defaultChecked={todo.completed} type="checkbox" value={todo.id}/>
        <span>{todo.task}</span>
        <button onClick={onDelete} value={todo.id}>DELETE</button>

      </li>
    );
  }
}
