import React from "react";
import TodoListHeader from "./TodoListHeader";
import TodoItem from "./TodoItem";
class TodoList extends React.Component {
  state = { items: [] };

  componentDidMount() {
    let items = localStorage.getItem("items");
    if (items) this.setState({ items: JSON.parse(items) });
  }

  onFormSubmit = itemName => {
    this.setState(oldState => {
      //TODO item id
      const newItem = { id: itemName, name: itemName };
      const items = [].concat(oldState.items, newItem);
      localStorage.setItem("items", JSON.stringify(items));
      return { items };
    });
  };

  render() {
    console.log(this.state.items);

    const items = this.state.items.map(item => (
      <TodoItem key={item.id} name={item.name} />
    ));
    return (
      <div>
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
