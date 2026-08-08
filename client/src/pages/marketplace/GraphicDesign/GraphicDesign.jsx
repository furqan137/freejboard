import React from "react";
import '../CategoryPage.css';


const GraphicDesign = () => {
  return (
    <div className="category-page">
      <h1>Graphic Design Services</h1>
      <p>Explore creative graphic design services for logos, branding, and more.</p>
      <div className="services-list">
        <div className="service-card">
          <h3>Logo Design</h3>
          <p>Design a unique and memorable logo to represent your brand.</p>
          <span>Starting at: $150</span>
        </div>
        <div className="service-card">
          <h3>Branding Package</h3>
          <p>Create a complete branding package, including logo, color schemes, and typography.</p>
          <span>Starting at: $500</span>
        </div>
        <div className="service-card">
          <h3>Social Media Graphics</h3>
          <p>Design engaging graphics for social media platforms.</p>
          <span>Starting at: $100</span>
        </div>
      </div>
    </div>
  );
};

export default GraphicDesign;
