import React from "react";
import "./Input.css";

const Input = ({
  label,
  type = "text",
  placeholder = "",
  value,
  onChange,
  onBlur,
  errorMessage = "",
  required = false,
  disabled = false,
}) => {
  return (
    <div className="input-container">
      {label && <label className="input-label">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        disabled={disabled}
        className={`input-field ${errorMessage ? "input-error" : ""}`}
      />
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default Input;
