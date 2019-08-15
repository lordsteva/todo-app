import React, { Component } from "react";
import "./Modal.css";

class Modal extends Component {
  ref = React.createRef();

  onClose = () => {
    // this.ref.current.style = { display: "none" };
    this.props.onClose();
  };

  onClick = e => {
    if (e.target === this.ref.current) this.onClose();
  };

  render() {
    const containerStyle = {
      padding: "25px",
      display: "flex",
      flexDirection: "column"
    };
    return (
      <div onClick={this.onClick} ref={this.ref} className="modal">
        <div className="modal-content">
          <span className="close" onClick={this.onClose}>
            &times;
          </span>
          <div style={containerStyle}>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Modal;
