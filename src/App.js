import React, { Component } from "react";
import Todos from "./components/Todos"; //importing another component from 'components' folder
import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false
      },
      {
        id: 2,
        title: "dinner",
        completed: false
      },
      {
        id: 3, 
        title: "meeting",
        completed: false
      }
    ]
  };

  //toggle complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} />{" "}
        {/*and this is the syntax to embed another component in app component and here we are passing state of app component as a prop to Todos component*/}
      </div>
    );
  }
}

export default App;
