import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { addTodo, deleteTodo, getMyTodos, getSharedTodos } from '../utils';
import TodoItem from './TodoItem';
import './TodosList.css';

export default class TodosList extends Component {
  state = {
    addTodo: '',
    todos: [],
    publicTodos: [],
    public: (this.props.public) ? this.props.public : false
  }

  async componentDidMount() {
    try {
      const myTodos = await getMyTodos();
      let publicTodos = [];
      if (this.state.public) {
        myTodos.filter(todo => todo.shared);
        publicTodos = (await getSharedTodos()).filter(todo => !myTodos.includes(todo));
        console.log(myTodos);
        console.log(publicTodos);
      }
      this.setState({ todos: myTodos, publicTodos: publicTodos });
    }
    catch (err) {
      this.props.history.push('/auth');
    }
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

  render() {
    const { todos, publicTodos } = this.state;
    return (

      <form className="TodosList">
        <ul>
          {this.state.public && <h2 className="page-title">Public todos</h2>}
          <fieldset className="add-todo">
            <li>
              <input type="text" onChange={this.handleAddTodoChange} />
              <button onClick={this.handleAddTodo}>Add</button>
            </li>
          </fieldset>
          <fieldset className="todo-list">
            {!this.state.public && todos.reverse().map(todo => {
              return <TodoItem key={todo.id} todo={todo} onDelete={this.handleDelete}/>;
            })}
            {this.state.public && publicTodos.map(todo => {
              if (todos.some(t => t.task === todo.task)) return <TodoItem key={todo.id} todo={todo} onDelete={this.handleDelete}/>;
              else return <li className="public-todo"><span>{todo.task}</span></li>;
            })}
          </fieldset>
        </ul>
        <Link to='/'><button>home</button></Link>
      </form>
    );
  }
}
