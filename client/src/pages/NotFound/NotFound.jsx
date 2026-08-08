import React from "react";
import { NavLink } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <p>Page Not Found</p>
      <NavLink to="/" className="notfound-home-link">Go Back Home</NavLink>
    </div>
  );
};

export default NotFound;
