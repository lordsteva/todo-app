import React from "react";
import "./TodoItem.css";
class TodoItem extends React.PureComponent {
  onItemChecked = e => {
    console.log(this.props.item);
    this.props.onItemChecked(this.props.item.id);
  };
  onButtonClick = e => {
    this.props.onItemDelete(this.props.item.id);
  };

  render() {
    const { item } = this.props;

    return (
      <div className="todo-item">
        <div className="todo-content">
          <input
            onChange={this.onItemChecked}
            type="checkbox"
            defaultChecked={item.completed}
          />
          <div className="todo-caption">{item.name}</div>
        </div>
        <div className="button-container">
          <button onClick={this.onButtonClick}>X</button>
        </div>
      </div>
    );
  }
}

export default TodoItem;
