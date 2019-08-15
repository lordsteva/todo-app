import React from "react";
import "./TodoItem.css";

class TodoItem extends React.PureComponent {
  onChecked = e => {
    this.props.onChecked(this.props.item.id);
  };

  onClick = e => {
    this.props.onDelete(this.props.item.id);
  };

  render() {
    return (
      <div className="todo-item">
        <div className="todo-content">
          <input
            onChange={this.onChecked}
            type="checkbox"
            defaultChecked={this.props.item.completed}
          />
          <div className="todo-caption">{this.props.item.name}</div>
        </div>
        <div className="button-container">
          <button onClick={this.onClick}>X</button>
        </div>
      </div>
    );
  }
}

export default TodoItem;
