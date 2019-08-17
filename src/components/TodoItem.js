import React from "react";
import "./TodoItem.css";
import Modal from "./Modal";
import TextInput from "./TextInput";

class TodoItem extends React.PureComponent {
  state = { editing: false };
  onChecked = e => {
    this.props.onChecked(this.props.item.id);
  };

  onClick = e => {
    this.props.onDelete(this.props.item.id);
  };

  onEdit = () => {
    this.setState({ editing: true });
  };

  onClose = () => {
    this.setState({ editing: false });
  };

  onChange = e => {
    this.props.onCaptionChange(this.props.item.id, e.target.value);
  };

  render() {
    return (
      <div className="todo-item">
        {this.state.editing ? (
          <Modal onClose={this.onClose}>
            <TextInput
              text={this.props.item.caption}
              onChange={this.onChange}
            />

            <div>notifications</div>
            <div>timer</div>
          </Modal>
        ) : null}
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
            onClick={this.onClick}
          >
            X
          </button>
        </div>
      </div>
    );
  }
}

export default TodoItem;
