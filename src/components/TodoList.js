import React from "react";
import TodoListHeader from "./TodoListHeader";
import TodoItem from "./TodoItem";
import Utils from "./utils";

import "./TodoList.css";

class TodoList extends React.Component {
  state = { items: [], id: 1 };

  componentDidMount() {
    this.setState(Utils.loadData());
  }

  onItemDelete = itemID => {
    this.setState(oldState => {
      let items = [...oldState.items];
      items = items.filter(item => item.id !== itemID);
      Utils.saveData(items);
      return { items };
    });
  };

  onFormSubmit = itemName => {
    if (!itemName) return;
    this.setState(oldState => {
      const id = oldState.id;
      const newItem = { id, name: itemName, completed: false };
      const items = [...oldState.items, newItem];
      Utils.saveData(items, id + 1);
      return { id: id + 1, items };
    });
  };

  onItemChecked = itemID => {
    this.setState(oldState => {
      const items = [...oldState.items];
      const item = items.find(item => item.id === itemID);
      item.completed = !item.completed;
      Utils.saveData(items);
      return { items };
    });
  };

  render() {
    const items = this.state.items.map(item => (
      <TodoItem
        onDelete={this.onItemDelete}
        key={item.id}
        item={item}
        onChecked={this.onItemChecked}
      />
    ));
    return (
      <div className="todo-list">
        <TodoListHeader onSubmit={this.onFormSubmit} items={this.state.items} />
        {items}
      </div>
    );
  }
}

export default TodoList;
