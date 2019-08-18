import React from "react";
import "./TextInput.css";

function TextInput(props) {
  return (
    <input
      className="text-input"
      placeholder={props.placeholder}
      type="text"
      value={props.text}
      onChange={e => props.onChange(e.target.value)}
    />
  );
}

export default TextInput;
