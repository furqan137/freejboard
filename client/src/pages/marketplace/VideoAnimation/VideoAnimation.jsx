import React from "react";
import '../CategoryPage.css';

const VideoAnimation = () => {
  return (
    <div className="category-page">
      <h1>Web Development Services</h1>
      <p>Explore the best web development services available to create your dream website.</p>
      <div className="services-list">
        <div className="service-card">
          <h3>Custom Website Development</h3>
          <p>Build a custom website tailored to your needs, with responsive design and modern features.</p>
          <span>Starting at: $500</span>
        </div>
        <div className="service-card">
          <h3>eCommerce Development</h3>
          <p>Create an online store with powerful tools for inventory management and secure transactions.</p>
          <span>Starting at: $700</span>
        </div>
        <div className="service-card">
          <h3>WordPress Development</h3>
          <p>Build a WordPress site with plugins, themes, and customizations to suit your brand.</p>
          <span>Starting at: $300</span>
        </div>
      </div>
    </div>
  );
};

export default VideoAnimation;