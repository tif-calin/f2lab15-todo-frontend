import React, { Component } from 'react';
import { addTodo, completeTodo, deleteTodo, getMyTodos } from '../utils';
import TodoItem from './TodoItem';
import './TodosList.css';

export default class TodosList extends Component {
  state = {
    addTodo: '',
    todos: [
      // {
      //   task: 'water the cats',
      //   completed: true,
      //   userId: 1,
      //   shared: false
      // }
    ]
  }

  async componentDidMount() {
    const todos = await getMyTodos();
    this.setState({ todos: todos });
  }

  handleAddTodoChange = e => {
    this.setState({ addTodo: e.target.value });
  }

  handleAddTodo = async e => {
    e.preventDefault();
    const todo = {
      task: this.state.addTodo,
      completed: false,
      shared: false,
      userId: this.props.userId
    };
    await addTodo(todo);
    this.setState({ todos: await getMyTodos() });
  }

  handleDelete = async e => {
    e.preventDefault();
    await deleteTodo(e.target.value);
    this.setState({ todos: await getMyTodos() });
  }

  handleComplete = async e => {
    const todo = {
      id: e.target.value,
      completed: e.target.checked
    };
    console.log(todo);
    await completeTodo(todo);
  }

  render() {
    const { todos } = this.state;
    return (

      <form className="TodosList">
        <ul>
          <fieldset className="add-todo">
            <li>
              <input type="text" onChange={this.handleAddTodoChange} />
              <button onClick={this.handleAddTodo}>Add</button>
            </li>
          </fieldset>
          <fieldset>
            {todos.reverse().map(todo => {
              return <TodoItem key={todo.id} todo={todo} onDelete={this.handleDelete} onComplete={this.handleComplete}/>;
            })}
          </fieldset>
        </ul>
      </form>
    );
  }
}
