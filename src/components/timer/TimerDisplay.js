import React from "react";
import { getTimeString } from "../../timeUtils";
import { connect } from "react-redux";

class TimerDisplay extends React.PureComponent {
  render() {
    const elapsedTime = this.props.elapsedTime;
    return <div>{getTimeString(elapsedTime)} &nbsp;</div>;
  }
}

const mapStateToProps = state => {
  const activeTimer = state.timers.active;
  const elapsedTime = activeTimer && activeTimer.elapsedTime;
  return { elapsedTime };
};

export default connect(mapStateToProps)(TimerDisplay);
