import React from "react";
import "./TodoItem.css";

class TodoItem extends React.PureComponent {
  onChecked = e => {
    console.log(this.props.item);
    this.props.onChecked(this.props.item.id);
  };

  onClick = e => {
    this.props.onDelete(this.props.item.id);
  };

  render() {
    const { item } = this.props;
    return (
      <div className="todo-item">
        <div className="todo-content">
          <input
            onChange={this.onChecked}
            type="checkbox"
            defaultChecked={item.completed}
          />
          <div className="todo-caption">{item.name}</div>
        </div>
        <div className="button-container">
          <button onClick={this.onClick}>X</button>
        </div>
      </div>
    );
  }
}

export default TodoItem;
