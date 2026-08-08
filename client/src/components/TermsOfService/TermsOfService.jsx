import React from "react";
import "./TermsOfService.css"; // Importing the CSS file

const TermsOfService = () => {
  return (
    <div className="page-container">
      <h1 className="title">Terms of Service</h1>
      <p className="intro">
        Welcome to our website! Please read these Terms of Service carefully before using our platform. By accessing or using our services, you agree to be bound by these terms.
      </p>

      <section className="section">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using the website, you agree to comply with and be bound by these Terms of Service and any other legal notices and agreements published on the website. If you do not agree to these terms, you should refrain from using the website.
        </p>
      </section>

      <section className="section">
        <h2>2. Changes to Terms</h2>
        <p>
          We reserve the right to modify, update, or change these Terms of Service at any time. Any changes will be effective immediately upon posting on the website. It is your responsibility to review these terms periodically for any updates.
        </p>
      </section>

      <section className="section">
        <h2>3. User Responsibilities</h2>
        <p>
          As a user, you agree to provide accurate, current, and complete information about yourself. You also agree to use the website in compliance with applicable laws and not to engage in any activity that could harm the website or its users.
        </p>
      </section>

      <section className="section">
        <h2>4. Privacy Policy</h2>
        <p>
          We value your privacy. Please refer to our Privacy Policy for information about how we collect, use, and protect your data while using the website.
        </p>
      </section>

      <section className="section">
        <h2>5. Termination</h2>
        <p>
          We may suspend or terminate your access to the website at any time, without notice, for violation of these Terms of Service or for any other reason deemed appropriate.
        </p>
      </section>

      <section className="section">
        <h2>6. Contact Us</h2>
        <p>
          If you have any questions about these Terms of Service, feel free to contact us through our contact page or by email at support@example.com.
        </p>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Example Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TermsOfService;
