import React, { PureComponent } from "react";
import "./Modal.css";

class Modal extends PureComponent {
  containerStyle = {
    padding: "25px",
    display: "flex",
    flexDirection: "column"
  };

  onClose = () => {
    this.props.onClose();
  };

  render() {
    return (
      <>
        <div onClick={this.onClose} className="modal-overlay" />
        <div className="modal-content">
          <span className="close" onClick={this.onClose}>
            &times;
          </span>
          <div style={this.containerStyle}>{this.props.children}</div>
        </div>
      </>
    );
  }
}

export default Modal;
