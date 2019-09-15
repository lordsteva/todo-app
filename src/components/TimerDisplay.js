import React from "react";
import { getTimeString } from "../timeUtils";
import { connect } from "react-redux";

class TimerDisplay extends React.PureComponent {
  timeout = null;

  updateTimer = () => {
    this.timeout = setTimeout(() => {
      this.forceUpdate();
    }, 1000);
  };

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    if (!this.props.activeTimer) return null;
    this.updateTimer();
    const startTime = this.props.activeTimer.started;
    return <div>{getTimeString(new Date(startTime), new Date())} &nbsp;</div>;
  }
}

const mapStateToProps = state => {
  const activeTimer = state.timers.active;
  return { activeTimer };
};

export default connect(mapStateToProps)(TimerDisplay);
