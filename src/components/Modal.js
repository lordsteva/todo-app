import React, { PureComponent } from "react";
import "./Modal.css";

class Modal extends PureComponent {
  ref = React.createRef();

  onClose = () => {
    this.props.onClose();
  };

  render() {
    const containerStyle = {
      padding: "25px",
      display: "flex",
      flexDirection: "column"
    };
    return (
      <>
        <div onClick={this.onClose} className="modal-overlay" />
        <div className="modal-content">
          <span className="close" onClick={this.onClose}>
            &times;
          </span>
          <div style={containerStyle}>{this.props.children}</div>
        </div>
      </>
    );
  }
}

export default Modal;
