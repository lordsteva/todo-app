import React from "react";
import { connect } from "react-redux";
import { getTimeString } from "../../timeUtils";
import TimerDisplay from "./TimerDisplay";
import "./TimersHistory.css";

class TimersHistory extends React.PureComponent {
  timeout = null;
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
            <td>{getTimeString(0, total)}</td>
          </tr>
        </tfoot>
      </table>
    );
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    let total = 0;
    const timers = this.props.history.map(item => {
      const startDate = new Date(item.startTime.toDate());
      const endDate = item.endTime ? new Date(item.endTime.toDate()) : null;
      if (endDate) {
        total += endDate.getTime() - startDate.getTime();
      } else {
        total += new Date().getTime() - startDate.getTime();
        this.timeout = setTimeout(() => {
          this.forceUpdate();
        }, 1000);
      }
      return (
        <tr key={item.id}>
          <td>{startDate.toLocaleString()}</td>
          <td>{endDate ? endDate.toLocaleString() : null}</td>
          <td>
            {endDate ? getTimeString(startDate, endDate) : <TimerDisplay />}
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
    history: state.timers.all.filter(item => item.todoId === ownProps.item.id)
  };
};

export default connect(mapStateToProps)(TimersHistory);
