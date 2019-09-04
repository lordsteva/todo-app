import React from "react";
import { connect } from "react-redux";
import { removeTodo, filterTodos, removeCompletedTodos } from "../../actions";
import { filterTypes } from "../../utils";
import "./TodoListFooter.css";

class TodoListFooter extends React.PureComponent {
  onFilterChange = e => {
    e.preventDefault();
    const filter = e.target.href.split("/").pop();
    this.props.filterTodos(filter);
  };

  clearCompleted = () => {
    this.props.removeCompletedTodos();
  };

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

  render() {
    const { total, completed } = this.props;
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
        <button style={btnStyle} onClick={this.clearCompleted}>
          Clear completed
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const completed = state.todoItems.filter(item => item.completed).length;
  return {
    items: state.todoItems,
    total: state.todoItems.length,
    completed,
    selected: state.filter
  };
};

export default connect(
  mapStateToProps,
  { removeTodo, filterTodos, removeCompletedTodos }
)(TodoListFooter);
