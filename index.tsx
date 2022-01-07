import React, { Component } from 'react';
import { render } from 'react-dom';
import AddTodo from './AddTodo';
import Todo from './Todo';
import './style.css';
import { TodoInterface } from './models';

interface AppProps {}

interface AppState {
  todos: TodoInterface[];
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  onAdd = (title) => {
    const todo = { title, status: 'Open' } as TodoInterface;
    this.setState(({ todos }) => ({ todos: [...todos, todo] }));
  };

  onToggle = (todo: TodoInterface) => {
    this.setState(({ todos }) => {
      const _todo = todos.find(({ title }) => title === todo.title);
      _todo.status = todo.status === 'Open' ? 'Completed' : 'Open';
      return { todos };
    });
  };

  onDelete = (todo: TodoInterface) => {
    this.setState(({ todos }) => {
      const index = todos.findIndex(({ title }) => title === todo.title);
      todos.splice(index, 1);
      return { todos };
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <div>
        <AddTodo onAdd={this.onAdd} />
        <ol>
          {todos.map((prep) => (
            <Todo
              key={prep.title}
              {...prep}
              toggle={this.onToggle}
              remove={this.onDelete}
            ></Todo>
          ))}
        </ol>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
