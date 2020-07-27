import React, { Component } from "react";
import "./App.css";

import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";

class App extends Component {
  state = {
    todos: [
      {
        id: 0,
      },
      {
        id: 1,
        title: "Sleep",
        completed: false,
      },
      {
        id: 2,
        title: "Work",
        completed: false,
      },
      {
        id: 3,
        title: "Study",
        completed: false,
      },
      {
        id: 4,
        title: "Play",
        completed: false,
      },
      {
        id: 5,
        title: "Exercise",
        completed: false,
      },
    ],
  };

  deleteTodoHandler = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  addTodoHandler = (id) => {
    console.log(id);
    const newItem = this.state.todos.concat(id);
    this.setState({ todos: newItem });
  };

  render() {
    const filterTodos = this.state.todos.filter((todo) => todo.id > 0);
    const todos = filterTodos.map((todo) => (
      <Todo
        key={todo.id}
        id={todo.id}
        title={todo.title}
        status={todo.completed}
        deleteTodoHandler={this.deleteTodoHandler}
      />
    ));

    const newId = this.state.todos[this.state.todos.length - 1].id;

    const addTodo = (
      <AddTodo newId={newId} addTodoHandler={this.addTodoHandler} />
    );

    return (
      <div className="App">
        <h1>Things To Do</h1>
        <div style={{ marginTop: "50px" }}>{todos}</div>
        <div>{addTodo}</div>
      </div>
    );
  }
}

export default App;
