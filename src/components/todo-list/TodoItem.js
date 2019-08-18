import React from "react";
import "./TodoItem.css";

class TodoItem extends React.PureComponent {
  onChecked = e => {
    this.props.onChecked(this.props.item.id);
  };

  onDelete = e => {
    this.props.onDelete(this.props.item.id);
  };

  onEdit = () => {
    this.props.onEdit(this.props.item.id);
  };

  onChange = e => {
    this.props.onCaptionChange(this.props.item.id, e.target.value);
  };

  render() {
    return (
      <div className="todo-item">
        <div className="todo-content">
          <input
            onChange={this.onChecked}
            type="checkbox"
            checked={this.props.item.completed}
          />
          <div className="todo-caption">{this.props.item.caption}</div>
        </div>
        <div className="button-container">
          <button className="edit-btn" title="Edit item" onClick={this.onEdit}>
            <img
              alt="edit"
              src="https://image.flaticon.com/icons/svg/84/84380.svg"
            />
          </button>
          <button
            className="delete-btn"
            title="Delete item"
            onClick={this.onDelete}
          >
            X
          </button>
        </div>
      </div>
    );
  }
}

export default TodoItem;
