import React, { Component } from 'react';
import { addTodo, getMyTodos } from '../utils';
import TodoItem from './TodoItem';

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




  render() {
    const { todos } = this.state;
    return (

      <form className="TodosList">
        <ul>
          <fieldset>
            <li>
              <input type="text" onChange={this.handleAddTodoChange} />
              <button onClick={this.handleAddTodo}>Add</button>
            </li>
          </fieldset>
          <fieldset>
            {todos.map(todo => {
              return <TodoItem key={todo.id} todo={todo} />;
            })}
          </fieldset>
        </ul>
      </form>
    );
  }
}
