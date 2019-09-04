import React from "react";
import { connect } from "react-redux";
import TodoListHeader from "./TodoListHeader";
import TodoListFooter from "./TodoListFooter";
import TodoItem from "./TodoItem";
import { filterTypes } from "../../utils";
import { fetchTodos } from "../../actions";
import "./TodoList.css";

class TodoList extends React.PureComponent {
  componentDidMount() {
    this.props.fetchTodos();
  }

  filterItems = () =>
    this.props.items.filter(
      item =>
        this.props.filter === filterTypes.ALL ||
        item.completed === (this.props.filter === filterTypes.COMPLETED)
    );

  render() {
    const filteredItems = this.filterItems().map(item => (
      <TodoItem key={item.id} item={item} />
    ));
    return (
      <div className="todo-list">
        <TodoListHeader />
        {filteredItems}
        <TodoListFooter />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.todoItems,
    filter: state.filter
  };
};

export default connect(
  mapStateToProps,
  { fetchTodos }
)(TodoList);
