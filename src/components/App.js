import React, { Component } from "react";
import TodoList from "./todo-list/TodoList";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import reducers from "../reducers";

class App extends Component {
  store = createStore(reducers, applyMiddleware(thunk));
  render() {
    return (
      <Provider>
        <div
          style={{ minHeight: "100vh", backgroundColor: "rgb(235, 235, 235)" }}
        >
          <TodoList />
        </div>
      </Provider>
    );
  }
}

export default App;
