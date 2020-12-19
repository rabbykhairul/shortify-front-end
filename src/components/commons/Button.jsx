import React from "react";
import "./Button.css";

const Button = (props) => {
  const { label } = props;
  return <button className="btn">{label}</button>;
};

export default Button;
