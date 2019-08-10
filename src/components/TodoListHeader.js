import React from "react";

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
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
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
