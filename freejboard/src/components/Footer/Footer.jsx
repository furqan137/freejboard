import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Categories</h2>
          <ul>
            <li><a href="/graphic-design">Graphics & Design</a></li>
            <li><a href="/digital-marketing">Digital Marketing</a></li>
            <li><a href="/translation-services">Writing & Translation</a></li>
            <li><a href="/video-animation">Video & Animation</a></li>
            <li><a href="/music-audio">Music & Audio</a></li>
            <li><a href="/programming-tech">Programming & Tech</a></li>
            <li><a href="/business-consulting">Business</a></li>
            <li><a href="/lifestyle-coaching">Lifestyle</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h2>Support</h2>
          <ul>
            <li><a href="/help-support">Help & Support</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/terms-of-service">Terms of Service</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h2>Company</h2>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/investor-relations">Investor Relations</a></li>
          </ul>
        </div>
        
        <div className="footer-section social-media">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook" className="social-icon">Facebook</a>
            <a href="https://twitter.com" aria-label="Twitter" className="social-icon">Twitter</a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="social-icon">LinkedIn</a>
            <a href="https://instagram.com" aria-label="Instagram" className="social-icon">Instagram</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 YourCompanyName. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
