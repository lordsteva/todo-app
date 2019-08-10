import React from "react";

class TodoItem extends React.Component {
  render() {
    console.log(this.props.name);
    return <div>{this.props.name}</div>;
  }
}

export default TodoItem;
