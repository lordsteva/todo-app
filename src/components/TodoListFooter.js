import React from "react";
import "./TodoListFooter.css";

class TodoListFooter extends React.Component {
  creatFilter = caption => {
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
    const divStyle = { visibility: props.total == 0 ? "hidden" : "visible" };
    const btnStyle = {
      visibility: props.completed == 0 ? "hidden" : "visible"
    };
    return (
      <div className="todo-list-footer">
        <div style={divStyle}>
          {`${props.completed} / ${props.total} completed `}{" "}
        </div>

        {this.creatFilter("All")}
        {this.creatFilter("Completed")}
        {this.creatFilter("Active")}

        <button style={btnStyle} onClick={this.props.clearCompleted}>
          Clear completed
        </button>
      </div>
    );
  }
}

export default TodoListFooter;
