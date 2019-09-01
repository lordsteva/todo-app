import React from "react";
import { addTodo, editTodo } from "../../actions";
import "./TodoListHeader.css";
import { connect } from "react-redux";
import TextInput from "../common/TextInput";

class TodoListHeader extends React.PureComponent {
  state = { text: "" };

  onChange = text => {
    this.setState({ text });
  };

  onSubmit = e => {
    e.preventDefault();
    const { text } = this.state;
    if (!text) return;
    this.props.addTodo(text);
    this.setState({ text: "" });
  };

  markAllAsCompleted = e => {
    this.props.items.forEach(item =>
      this.props.editTodo({ id: item.id, completed: true })
    );
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

export default connect(
  state => ({ items: state.todoItems }),
  { addTodo, editTodo }
)(TodoListHeader);
