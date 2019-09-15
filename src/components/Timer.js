import React from "react";
import { connect } from "react-redux";
import { endTimer, fetchTimers } from "../actions";
import TimerDisplay from "./TimerDisplay";
import "./Timer.css";

class Timer extends React.Component {
  componentDidMount() {
    this.props.fetchTimers();
  }

  renderActiveTimer = () => {
    return (
      <div className="timer">
        <div className="timer-container">
          <div className="caption">Active timer:&nbsp;</div>{" "}
          <div className="content timer-container">
            <TimerDisplay />
            <button onClick={this.props.endTimer}>Stop timer </button>
          </div>
        </div>
        <hr style={{ margin: "1px", border: "0" }} />
        <div className="timer-container">
          <div className="caption">Todo caption:&nbsp;</div>
          <div className="content">{this.props.caption}</div>
        </div>
      </div>
    );
  };

  render() {
    if (this.props.activeTimer) return this.renderActiveTimer();
    clearTimeout(this.timeout);
    return (
      <div className="timer">
        <div className="no-active">No active timer</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const activeTimer = state.timers.active;
  const item = activeTimer
    ? state.todoItems.find(item => item.id === activeTimer.todoId)
    : null;
  const caption = item ? item.caption : null;
  return { activeTimer, caption };
};

export default connect(
  mapStateToProps,
  { endTimer, fetchTimers }
)(Timer);
