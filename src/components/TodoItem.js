import React from "react";
import "./TodoItem.css";
class TodoItem extends React.Component {
  onItemChecked = e => {
    this.props.onItemChecked(this.props.item.id);
  };
  onButtonClick = e => {
    this.props.onItemDelete(this.props.item.id);
  };
  render() {
    const { item } = this.props;
    return (
      <div className="todo-item">
        <input
          onChange={this.onItemChecked}
          type="checkbox"
          checked={item.completed}
        />
        <div>{item.name}</div>
        <button onClick={this.onButtonClick}>X</button>
      </div>
    );
  }
}

export default TodoItem;
