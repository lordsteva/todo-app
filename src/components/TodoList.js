import React from "react";
import TodoListHeader from "./TodoListHeader";
import TodoListFooter from "./TodoListFooter";
import TodoItem from "./TodoItem";
import Utils from "./utils";
import "./TodoList.css";

class TodoList extends React.Component {
  state = { items: [], id: 1, filter: "All" };

  componentDidMount() {
    this.setState(Utils.loadData());
  }

  markAllAsCompleted = () => {
    this.setState(oldState => {
      let items = [...oldState.items];
      items.forEach(item => (item.completed = true));
      Utils.saveData(items);
      return { items };
    });
  };

  onItemDelete = itemID => {
    this.setState(oldState => {
      const items = [...oldState.items].filter(item => item.id !== itemID);
      Utils.saveData(items);
      return { items };
    });
  };

  onFormSubmit = caption => {
    if (!caption) return;
    this.setState(oldState => {
      const id = oldState.id;
      const items = [...oldState.items, { id, caption, completed: false }];
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

  filterItems = () =>
    this.state.items.filter(
      item =>
        this.state.filter === "All" ||
        item.completed === (this.state.filter === "Completed")
    );

  onFilterChange = filter => {
    this.setState({ filter });
  };

  clearCompleted = () => {
    this.setState(oldState => {
      let items = [...oldState.items];
      items = items.filter(item => !item.completed);
      Utils.saveData(items);
      return { items };
    });
  };

  onCaptionChange = (itemID, text) => {
    this.setState(oldState => {
      const items = [...oldState.items];
      const item = items.find(item => item.id === itemID);
      item.caption = text;
      Utils.saveData(items);
      return { items };
    });
  };

  render() {
    const items = this.filterItems().map(item => (
      <TodoItem
        onDelete={this.onItemDelete}
        key={item.id}
        item={item}
        onCaptionChange={this.onCaptionChange}
        onChecked={this.onItemChecked}
      />
    ));
    const completed = this.state.items.filter(item => item.completed).length;
    return (
      <div className="todo-list">
        <TodoListHeader
          onClick={this.markAllAsCompleted}
          onSubmit={this.onFormSubmit}
        />
        {items}
        <TodoListFooter
          completed={completed}
          onFilterChange={this.onFilterChange}
          selected={this.state.filter}
          total={this.state.items.length}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default TodoList;
