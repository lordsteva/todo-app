import React from "react";
import "./TodoListHeader.css";
import TextInput from "./TextInput";

class TodoListHeader extends React.Component {
  state = { text: "" };

  onChange = e => {
    this.setState({ text: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.text);
    this.setState({ text: "" });
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
          <TextInput
            placeholder="TODO item caption"
            text={this.state.text}
            onChange={this.onChange}
          />
        </form>
      </div>
    );
  }
}

export default TodoListHeader;
