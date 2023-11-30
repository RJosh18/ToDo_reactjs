import ToDoList from "./ToDoList";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDoList />
      </div>
    );
  }
}

export default App;
