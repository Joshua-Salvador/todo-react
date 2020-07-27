import React, { Component } from "react";
import "../App.css";

class Todo extends Component {
  state = {
    status: this.props.status,
  };

  statusChangeHandler = () => {
    const status = this.state.status;
    this.setState({ status: !status });
  };

  deleteTodoHandler = () => {
    const id = this.props.id;
    this.props.deleteTodoHandler(id);
  };

  render() {
    const styles = {
      backgroundColor: this.state.status ? "#e3f6f5" : "#bae8e8",
      fontSize: "1.5rem",
      width: "50%",
      margin: "0.5rem auto",
      padding: "5px",
      borderRadius: "5px",
    };
    return (
      <React.Fragment>
        <p style={styles}>
          {this.props.title}{" "}
          <input
            onClick={this.statusChangeHandler}
            type="checkbox"
            name="Checkbox"
            id=""
          />
          <input
            className="delete btn btn-danger mr"
            type="button"
            value="Delete"
            onClick={this.deleteTodoHandler}
          />
        </p>
      </React.Fragment>
    );
  }
}

export default Todo;
