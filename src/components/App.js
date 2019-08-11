import React, { Component } from "react";
import TodoList from "./TodoList";

class App extends Component {
  render() {
    return (
      <div
        style={{ minHeight: "100vh", backgroundColor: "rgb(235, 235, 235)" }}
      >
        <TodoList />
      </div>
    );
  }
}

export default App;
