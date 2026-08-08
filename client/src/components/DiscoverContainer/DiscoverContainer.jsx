import React from "react";
import { NavLink } from "react-router-dom";
import "./DiscoverContainer.css";

const DiscoverContainer = () => {
  return (
    <div className="discover-container" style={{ backgroundImage: "url('src/assets/images/freelance.jpg')" }}>
      <div className="overlay"></div>
      <div className="content">
        <h1>Explore Opportunities</h1>
        <p>Find the right platform to discover freelance services, job openings, and connect with top companies.</p>
        <div className="discover-links">
          <NavLink to="/featured-companies" className="discover-button featured-button">
            Featured Companies
          </NavLink>
          <NavLink to="/sign-up" className="discover-button join-button">
            Join Now
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default DiscoverContainer;
