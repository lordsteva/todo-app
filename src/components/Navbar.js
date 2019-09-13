import React from "react";
import { connect } from "react-redux";
import { endTimer } from "../utils";

class Navbar extends React.PureComponent {
  state = { timeElapsed: 0 };

  renderActiveTimer = () => {
    return <div>neki ima</div>;
  };

  render() {
    if (this.props.activeTimer) return this.renderActiveTimer();
    return <div>No active timer</div>;
  }
}

const mapStateToProps = state => {
  return { activeTimer: state.timers.active };
};

export default connect(
  mapStateToProps,
  { endTimer }
)(Navbar);
