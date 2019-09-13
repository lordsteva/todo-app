import React, { Component } from "react";
import TodoList from "./todo-list/TodoList";
import Navbar from "./Navbar";

class App extends Component {
  render() {
    return (
      <div
        style={{ minHeight: "100vh", backgroundColor: "rgb(235, 235, 235)" }}
      >
        <Navbar />
        <TodoList />
      </div>
    );
  }
}

export default App;
