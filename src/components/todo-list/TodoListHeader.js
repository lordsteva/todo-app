import React from "react";
import "./TodoListHeader.css";
import TextInput from "../common/TextInput";

class TodoListHeader extends React.PureComponent {
  state = { text: "" };

  onChange = text => {
    this.setState({ text });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.text);
    this.setState({ text: "" });
  };

  markAllAsCompleted = e => {
    this.props.markAllAsCompleted();
  };

  render() {
    return (
      <div className="todo-list-header">
        <button onClick={this.markAllAsCompleted} title="Mark all as completed">
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
