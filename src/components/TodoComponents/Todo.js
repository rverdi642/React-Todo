import React from "react";
import "./Todo.css";

const Todo = props => {
  return (
    <div
      className={props.completed ? "completed" : null}
      onClick={() => props.toggleComplete(props.id)}

    >
      {props.todo}
    </div>
  );
};

export default Todo;
