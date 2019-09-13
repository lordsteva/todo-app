import React from "react";
import { connect } from "react-redux";
import {
  removeTodo,
  startEditing,
  editTodo,
  startTimer,
  endTimer
} from "../../actions";
import Modal from "../common/Modal";
import TextInput from "../common/TextInput";
import "./TodoItem.css";

class TodoItem extends React.PureComponent {
  onChecked = e => {
    const { id, completed } = this.props.item;
    this.props.editTodo({ id, completed: !completed });
  };

  onDelete = e => {
    this.props.removeTodo(this.props.item.id);
  };

  toggleEdit = () => {
    const newEditState = this.props.editing ? null : this.props.item.id;
    this.props.startEditing(newEditState);
  };

  onChange = e => {
    const { id } = this.props.item;
    this.props.editTodo({ id, caption: e });
  };

  startTimer = () => {
    this.props.startTimer(this.props.item.id);
  };

  endTimer = () => {
    this.props.endTimer();
  };

  renderEditing = () => {
    const { editing, item } = this.props;
    return editing === item.id ? (
      <Modal onClose={this.toggleEdit}>
        <TextInput text={item.caption} onChange={this.onChange} />
        <div>notifications</div>
        <div>timer</div>
      </Modal>
    ) : null;
  };

  renderTimerButton = () => {
    const { activeTimer } = this.props;
    if (activeTimer) {
      return (
        <button
          className="timer-btn btn-end"
          title="Stop timer"
          onClick={this.endTimer}
        >
          End timer
        </button>
      );
    }
    return (
      <button
        className="timer-btn btn-start"
        title="Start timer"
        onClick={this.startTimer}
      >
        Start timer
      </button>
    );
  };

  render() {
    console.log(this.props);
    return (
      <>
        {this.renderEditing()}
        <div className="todo-item">
          <div className="todo-content">
            <input
              onChange={this.onChecked}
              type="checkbox"
              checked={this.props.item.completed}
            />
            <div className="todo-caption">{this.props.item.caption}</div>
          </div>
          <div className="button-container">
            <button
              className="edit-btn"
              title="Edit item"
              onClick={this.toggleEdit}
            >
              <img
                alt="edit"
                src="https://image.flaticon.com/icons/svg/84/84380.svg"
              />
            </button>
            <button
              className="delete-btn"
              title="Delete item"
              onClick={this.onDelete}
            >
              X
            </button>
            {this.renderTimerButton()}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const activeTimer = state.timers.active
    ? state.timers.active.todoId === ownProps.item.id
    : false;
  return { editing: state.editing, activeTimer };
};

export default connect(
  mapStateToProps,
  { removeTodo, startEditing, editTodo, startTimer, endTimer }
)(TodoItem);
