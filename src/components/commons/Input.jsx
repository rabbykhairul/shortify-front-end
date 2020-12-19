import React from "react";
import "./Input.css";

const Input = (props) => {
  const {
    type = "text",
    label = "",
    name = "",
    placeholder = "",
    value,
    onChange,
    errorMessage,
  } = props;

  return (
    <label className="input-box">
      <span>{label}</span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {errorMessage && <span className="error-message">{errorMessage}</span>}
    </label>
  );
};

export default Input;
