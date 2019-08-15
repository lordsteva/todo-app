import React from "react";
import "./TodoListHeader.css";

class TodoListHeader extends React.Component {
  state = { name: "" };

  onChange = e => {
    this.setState({ name: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.name);
    this.setState({ name: "" });
  };

  onClick = e => {
    this.props.onClick();
  };

  render() {
    return (
      <div className="todo-list-header">
        <button onClick={this.onClick} title="Mark all as completed">
          <img
            width="40px"
            alt=""
            src="https://icon-library.net/images/check-mark-icon-png/check-mark-icon-png-0.jpg"
          />
        </button>
        <form onSubmit={this.onSubmit}>
          <input
            placeholder="TODO item caption"
            type="text"
            value={this.state.name}
            onChange={this.onChange}
          />
        </form>
      </div>
    );
  }
}

export default TodoListHeader;
