import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div>
      {props.taskList.map((eachTask, i) => {
        return (
          <Todo
            key={i}
            todo={eachTask.task}
            completed={eachTask.completed}
            id={eachTask.id}
            toggleComplete={props.toggleComplete}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
