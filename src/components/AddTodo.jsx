import React, { useState } from "react";

const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const newTodo = {
    id: props.newId + 1,
    title: title,
    completed: false,
  };
  const addItemHandler = (e) => {
    e.preventDefault();
    props.addTodoHandler(newTodo);
    setTitle("");
  };
  const onChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <div>
      <form onSubmit={addItemHandler}>
        <input
          className="form-control"
          type="text"
          value={newTodo.title}
          onChange={onChange}
        />
        <input className="btn btn-primary add-item" type="submit" />
      </form>
    </div>
  );
};

export default AddTodo;
