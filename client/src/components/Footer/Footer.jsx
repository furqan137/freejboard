import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="fj-footer">
      <div className="fj-footer__top">
        <div className="fj-footer__brand">
          <p className="fj-footer__logo">Freejboard</p>
          <p>
            The professional marketplace for hiring specialists and landing
            meaningful freelance work.
          </p>
        </div>

        <div className="fj-footer__cols">
          <div className="fj-footer__col">
            <h3>Categories</h3>
            <ul>
              <li><Link to="/graphic-design">Graphics &amp; Design</Link></li>
              <li><Link to="/digital-marketing">Digital Marketing</Link></li>
              <li><Link to="/translation-services">Writing &amp; Translation</Link></li>
              <li><Link to="/video-animation">Video &amp; Animation</Link></li>
              <li><Link to="/programming-tech">Programming &amp; Tech</Link></li>
            </ul>
          </div>

          <div className="fj-footer__col">
            <h3>Support</h3>
            <ul>
              <li><Link to="/help-support">Help &amp; Support</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/faqs">FAQs</Link></li>
              <li><Link to="/terms-of-service">Terms</Link></li>
              <li><Link to="/privacy-policy">Privacy</Link></li>
            </ul>
          </div>

          <div className="fj-footer__col">
            <h3>Company</h3>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/investor-relations">Investors</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="fj-footer__bottom">
        <p>© {new Date().getFullYear()} Freejboard. All rights reserved.</p>
        <div className="fj-footer__social">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">X</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
