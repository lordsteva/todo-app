import React from "react";
import "./TodoListFooter.css";

class TodoListFooter extends React.PureComponent {
  renderFilter = caption => {
    const style =
      this.props.selected === caption ? { border: "1px solid red" } : {};
    return (
      <a
        href={caption}
        key={caption}
        onClick={this.onFilterChange}
        style={style}
      >
        {caption}
      </a>
    );
  };

  onFilterChange = e => {
    e.preventDefault();
    const filter = e.target.href.split("/").pop();
    this.props.onFilterChange(filter);
  };

  render() {
    const { total, completed, clearCompleted, filterTypes } = this.props;
    const divStyle = { visibility: total === 0 ? "hidden" : "visible" };
    const btnStyle = {
      visibility: completed === 0 ? "hidden" : "visible"
    };
    const filters = Object.keys(filterTypes).map(key =>
      this.renderFilter(filterTypes[key])
    );
    return (
      <div className="todo-list-footer">
        <div style={divStyle}>{`${completed}/${total} completed `}</div>
        {filters}
        <button style={btnStyle} onClick={clearCompleted}>
          Clear completed
        </button>
      </div>
    );
  }
}

export default TodoListFooter;
