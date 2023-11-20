import React from "react";
import "./primartButton.css";
const PrimaryButton = (props) => {
  return (
    <button
      className="primaryButton"
      disabled={props.disabled ? true : false}
      style={{ backgroundColor: props.disabled ? "#eee" : "#c1262a" }}
    >
      {props.text}
    </button>
  );
};

export default PrimaryButton;
