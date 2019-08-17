import React from "react";
import TodoListHeader from "./TodoListHeader";
import TodoListFooter from "./TodoListFooter";
import TodoItem from "./TodoItem";
import Modal from "./Modal";
import TextInput from "./TextInput";
import Utils from "./utils";
import "./TodoList.css";

class TodoList extends React.PureComponent {
  state = { items: [], id: 1, filter: "All", editing: null };

  componentDidMount() {
    this.setState(Utils.loadData());
  }

  markAllAsCompleted = () => {
    this.setState(oldState => {
      const items = oldState.items.map(item =>
        item.completed ? item : { ...item, completed: true }
      );
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
      const items = oldState.items.map(item =>
        item.id === itemID ? { ...item, completed: !item.completed } : item
      );
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
      const items = [...oldState.items].filter(item => !item.completed);
      Utils.saveData(items);
      return { items };
    });
  };

  onCaptionChange = text => {
    this.setState(oldState => {
      const items = oldState.items.map(item =>
        item.id === oldState.editing ? { ...item, caption: text } : item
      );
      Utils.saveData(items);
      return { items };
    });
  };

  onEditStart = itemID => {
    this.setState({ editing: itemID });
  };

  onEditStop = itemID => {
    this.setState({ editing: null });
  };

  render() {
    const { items, editing, filter } = this.state;
    const filteredItems = this.filterItems().map(item => (
      <TodoItem
        onDelete={this.onItemDelete}
        key={item.id}
        item={item}
        onEdit={this.onEditStart}
        onChecked={this.onItemChecked}
      />
    ));
    const completed = items.filter(item => item.completed).length;
    return (
      <div className="todo-list">
        {editing ? (
          <Modal onClose={this.onEditStop}>
            <TextInput
              text={items.find(item => item.id === editing).caption}
              onChange={this.onCaptionChange}
            />
            <div>notifications</div>
            <div>timer</div>
          </Modal>
        ) : null}
        <TodoListHeader
          markAllAsCompleted={this.markAllAsCompleted}
          onSubmit={this.onFormSubmit}
        />
        {filteredItems}
        <TodoListFooter
          completed={completed}
          onFilterChange={this.onFilterChange}
          selected={filter}
          total={items.length}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default TodoList;
