import React from "react";
import TodoList from "./components/TodoComponents/TodoList.js";
import TodoForm from "./components/TodoComponents/TodoForm.js";
import ()

const dummyData = [
  {
    task: "Task One",
    id: new Date(),
    completed: false
  },
  {
    task: "Task Two",
    id: new Date(),
    completed: false
  },
  {
    task: "Task Three",
    id: new Date(),
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: dummyData,
      inputVal: ""
    };
  }

  updateInputVal = event => {
    const { value } = event.target;
    this.setState({ inputVal: value });
  };

  submitNewTask = event => {
    event.preventDefault();
    this.setState(prevState => ({
      list: prevState.list.concat({
        id: new Date(),
        task: prevState.inputVal,
        completed: false
      }),
      inputVal: ""
    }));
  };

  toggleComplete = id => {
    let list = this.state.list.slice();
    list = list.map(todoObject => {
      if (todoObject.id === id) todoObject.completed = !todoObject.completed;
      return todoObject;
    } );
    this.setState({ list });
  };


  clearComplete = id =>{
    let list = this.state.list.filter(todoObject => {todoObject.completed === 'false'
      return todoObject;
    });
    this.setState({ list });
  };
// }


  

  render() {
    return (
      <div>
        <TodoList
          taskList={this.state.list}
          toggleComplete={this.toggleComplete}
        />

        <TodoForm
          inputVal={this.state.inputVal}
          updateInputVal={this.updateInputVal}
          submitNewTask={this.submitNewTask}
          clearComplete={this.clearComplete}
        />
      </div>
    );
  }
 }

export default App;
