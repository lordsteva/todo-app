import React from "react";
import TodoListHeader from "./TodoListHeader";
import TodoItem from "./TodoItem";

import "./TodoList.css";
class TodoList extends React.Component {
  state = { items: [], id: 1 };

  componentDidMount() {
    const items = localStorage.getItem("items");
    if (items) {
      const id = localStorage.getItem("id");
      this.setState({ id: id * 1, items: JSON.parse(items) });
    }
  }

  onItemDelete = itemID => {
    this.setState(oldState => {
      let items = [].concat(oldState.items);
      items = items.filter(item => item.id !== itemID);
      localStorage.setItem("items", JSON.stringify(items));
      return { items };
    });
  };

  onFormSubmit = itemName => {
    if (!itemName) return;
    this.setState(oldState => {
      const id = oldState.id;
      localStorage.setItem("id", id + 1);
      const newItem = { id, name: itemName, completed: false };
      const items = [...oldState.items, newItem];
      localStorage.setItem("items", JSON.stringify(items));
      return { id: id + 1, items };
    });
  };

  onItemChecked = itemID => {
    this.setState(oldState => {
      const items = [...oldState.items];
      const item = items.find(item => item.id === itemID);
      item.completed = !item.completed;
      return { items };
    });
  };

  render() {
    const items = this.state.items.map(item => (
      <TodoItem
        onItemDelete={this.onItemDelete}
        key={item.id}
        item={item}
        onItemChecked={this.onItemChecked}
      />
    ));
    return (
      <div className="todo-list">
        <TodoListHeader
          onFormSubmit={this.onFormSubmit}
          items={this.state.items}
        />
        {items}
      </div>
    );
  }
}

export default TodoList;
