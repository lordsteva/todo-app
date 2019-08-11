import React from "react";
import "./TodoListHeader.css";

class TodoListHeader extends React.Component {
  state = { name: "" };
  onInputChange = e => {
    this.setState({ name: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.name);
    this.setState({ name: "" });
  };

  render() {
    return (
      <div className="todo-list-header">
        <button>
          <img
            width="40px"
            src="https://icon-library.net/images/check-mark-icon-png/check-mark-icon-png-0.jpg"
          />
        </button>
        <form onSubmit={this.onFormSubmit}>
          <input
            placeholder="TODO item caption"
            type="text"
            value={this.state.name}
            onChange={this.onInputChange}
          />
        </form>
      </div>
    );
  }
}

export default TodoListHeader;
