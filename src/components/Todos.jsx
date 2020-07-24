import React from "react";
import Todo from "./Todo";

const Todos = (props) => {
  const todos = props.todos;
  const todo = todos.map((todo) => (
    <Todo key={todo.id} title={todo.title} status={todo.completed} />
  ));
  console.log(todos);

  return (
    <div>
      <p>{todo}</p>
    </div>
  );
};

export default Todos;
