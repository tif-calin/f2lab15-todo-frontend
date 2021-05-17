import React, { Component } from 'react';

export default class TodoItem extends Component {
  render() {
    const { todo } = this.props;
    return (
      <li className="TodoItem">

        {todo.task}
        <button>DELETE</button>

      </li>
    );
  }
}
