import React from "react";
import "./primaryButton.css";
const PrimaryButton = (props) => {
  return (
    <button
      className="primaryButton"
      disabled={props.disabled ? true : false}
      style={{
        backgroundColor: props.disabled ? "#dbdbdb" : "#c1262a",
        width: props.fullWidth ? "100%" : "inherit",
      }}
    >
      {props.text}
    </button>
  );
};

export default PrimaryButton;
