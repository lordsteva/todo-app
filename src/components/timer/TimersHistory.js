import React from "react";
import { connect } from "react-redux";
import { getTimeString } from "../../timeUtils";
import TimerDisplay from "./TimerDisplay";
import "./TimersHistory.css";

class TimersHistory extends React.PureComponent {
  renderTable(timers, total) {
    return (
      <table border="solid black 1px">
        <thead>
          <tr>
            <th>Started</th>
            <th>Ended</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>{timers}</tbody>
        <tfoot>
          <tr>
            <th colSpan="2">Total time:</th>
            <td>{getTimeString(total * 1000)}</td>
          </tr>
        </tfoot>
      </table>
    );
  }

  render() {
    let total = 0;
    const timers = this.props.history.map(item => {
      const startDate = new Date(item.startTime.toDate());
      const endDate = item.endTime ? new Date(item.endTime.toDate()) : null;
      if (endDate) {
        total += Math.floor((endDate.getTime() - startDate.getTime()) / 1000);
      } else {
        total += Math.floor(this.props.activeTimer / 1000);
      }
      return (
        <tr key={item.id}>
          <td>{startDate.toLocaleString()}</td>
          <td>{endDate ? endDate.toLocaleString() : null}</td>
          <td>
            {endDate ? getTimeString(endDate - startDate) : <TimerDisplay />}
          </td>
        </tr>
      );
    });

    return (
      <div>
        <h3>Timers:</h3>
        {this.renderTable(timers, total)}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    activeTimer: state.timers.active && state.timers.active.elapsedTime,
    history: state.timers.all.filter(item => item.todoId === ownProps.item.id)
  };
};

export default connect(mapStateToProps)(TimersHistory);
