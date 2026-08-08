import React from "react";
import '../CategoryPage.css';


const DigitalMarketing = () => {
  return (
    <div className="category-page">
      <h1>Digital Marketing Services</h1>
      <p>Boost your brand with expert digital marketing services including SEO, PPC, and social media management.</p>
      <div className="services-list">
        <div className="service-card">
          <h3>SEO Services</h3>
          <p>Optimize your website to rank higher on search engines.</p>
          <span>Starting at: $300</span>
        </div>
        <div className="service-card">
          <h3>Google Ads Campaigns</h3>
          <p>Run targeted ads to increase traffic and sales through Google Ads.</p>
          <span>Starting at: $400</span>
        </div>
        <div className="service-card">
          <h3>Social Media Advertising</h3>
          <p>Promote your brand with paid ads on platforms like Facebook, Instagram, and LinkedIn.</p>
          <span>Starting at: $350</span>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketing;
