import React from "react";
import { connect } from "react-redux";
import Timer from "./Timer";
import logo from "../img/logo.png";
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <img className="logo" alt="logo" src={logo} />
        <Timer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { activeTimer: state.timers.active };
};

export default connect(mapStateToProps)(Navbar);
