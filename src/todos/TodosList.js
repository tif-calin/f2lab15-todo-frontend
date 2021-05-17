import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodosList extends Component {
  state = {
    todos: [
      {
        task: 'water the cats',
        completed: true,
        userId: 1,
        shared: false
      }
    ]
  }

  render() {
    const { todos } = this.state;
    return (

      <div className="TodosList">
        <ul>
          {todos.map(todo => {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
        </ul>
      </div>
    );
  }
}
