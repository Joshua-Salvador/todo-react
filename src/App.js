import React, { Component } from "react";
import "./App.css";

import Todo from "./components/Todo";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Sleep",
        completed: true,
      },
      {
        id: 2,
        title: "Work",
        completed: true,
      },
      {
        id: 3,
        title: "Study",
        completed: true,
      },
      {
        id: 4,
        title: "Play",
        completed: true,
      },
      {
        id: 5,
        title: "Exercise",
        completed: true,
      },
    ],
  };

  deleteTodoHandler = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  render() {
    const todos = this.state.todos.map((todo) => (
      <Todo
        key={todo.id}
        id={todo.id}
        title={todo.title}
        status={todo.completed}
        deleteTodoHandler={this.deleteTodoHandler}
      />
    ));

    return (
      <div className="App">
        <h1>Things To Do</h1>
        <div>{todos}</div>
      </div>
    );
  }
}

export default App;
