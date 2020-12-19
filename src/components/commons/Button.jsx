import React from "react";
import "./Button.css";

const Button = (props) => {
  const { label, disabled = false } = props;
  const className = disabled ? "btn btn-disabled" : "btn";
  return (
    <button className={className} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
