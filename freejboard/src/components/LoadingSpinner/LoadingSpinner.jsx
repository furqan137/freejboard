import React from "react";
import "./LoadingSpinner.css";

const LoadingSpinner = ({ size = "medium", color = "#42855B" }) => {
  return (
    <div className={`spinner ${size}`} style={{ borderColor: color, borderTopColor: "transparent" }}></div>
  );
};

export default LoadingSpinner;
