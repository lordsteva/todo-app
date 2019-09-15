import React from "react";
import { connect } from "react-redux";
import { endTimer, fetchTimers } from "../actions";
import "./Timer.css";

class Timer extends React.Component {
  timeout = null;

  updateTimer = () => {
    this.timeout = setTimeout(() => {
      this.forceUpdate();
    }, 1000);
  };

  componentDidMount() {
    this.props.fetchTimers();
  }

  getTimeString = () => {
    let msec = new Date() - new Date(this.props.activeTimer.started);
    let hh = Math.floor(msec / 1000 / 60 / 60);
    msec -= hh * 1000 * 60 * 60;
    let mm = Math.floor(msec / 1000 / 60);
    msec -= mm * 1000 * 60;
    let ss = Math.floor(msec / 1000);
    hh = hh < 10 ? "0" + hh : hh;
    mm = mm < 10 ? "0" + mm : mm;
    ss = ss < 10 ? "0" + ss : ss;
    return `${hh}:${mm}:${ss}`;
  };

  renderActiveTimer = () => {
    this.updateTimer();
    return (
      <div className="timer">
        <div className="timer-container">
          <div className="caption">Active timer:&nbsp;</div>{" "}
          <div className="content timer-container">
            <div>{this.getTimeString()} &nbsp;</div>
            <button onClick={this.props.endTimer}>Stop timer </button>
          </div>
        </div>
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
