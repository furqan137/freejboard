import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./HelpSupport.css";

const HelpSupport = () => {
  return (
    <div className="help-support-container">
      <h1 className="help-title">Help & Support</h1>
      <p className="help-description">
        We're here to assist you! Browse the topics below or get in touch with our support team for personalized assistance.
      </p>

      <div className="help-options">
        <div className="help-card">
          <h2>FAQs</h2>
          <p>Find answers to common questions about our services.</p>
          <Link to="/faqs" className="help-button">
            Read FAQs
          </Link>
        </div>
        <div className="help-card">
          <h2>Contact Support</h2>
          <p>Need direct help? Reach out to our support team.</p>
          <Link to="/contact" className="help-button">
            Contact Us
          </Link>
        </div>
        <div className="help-card">
          <h2>Report a Problem</h2>
          <p>Encountered an issue? Let us know, and we'll fix it promptly.</p>
          <Link to="/report" className="help-button">
            Report Issue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;
