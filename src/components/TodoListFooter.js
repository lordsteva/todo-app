import React from "react";
//import "./TodoListFooter.css";

class TodoListFooter extends React.Component {
  createAnchor = caption => {
    const style =
      this.props.selected === caption ? { border: "1px solid red" } : {};
    return (
      <a href={caption} onClick={this.onClick} style={style}>
        {caption}
      </a>
    );
  };

  onClick = e => {
    e.preventDefault();
    let uri = e.target.href.split("/");
    uri = uri[uri.length - 1];
    this.props.onFilterChange(uri);
  };

  render() {
    const props = this.props;
    return (
      <div className="todo-list-footer">
        {props.left != 0 && <div>{`${props.left} tasks left`} </div>}
        {this.createAnchor("All")}
        {this.createAnchor("Completed")}
        {this.createAnchor("Active")}
      </div>
    );
  }
}

export default TodoListFooter;
