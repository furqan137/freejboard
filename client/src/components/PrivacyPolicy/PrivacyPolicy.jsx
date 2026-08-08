import React from "react";
import "./PrivacyPolicy.css";  // Make sure the file is in the same directory or adjust path

const PrivacyPolicy = () => {
  return (
    <div className="page-container">
      <h1 className="title">Privacy Policy</h1>
      <p className="intro">
        Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your data when you visit our website or use our services.
      </p>

      <section className="section">
        <h2>1. Information We Collect</h2>
        <p>We collect various types of data to provide and improve our services. This may include:</p>
        <ul>
          <li><strong>Personal Information:</strong> Information such as your name, email address, and other personal details provided during registration.</li>
          <li><strong>Usage Data:</strong> Information on how you interact with our website, including your IP address, browser type, pages visited, and time spent on the site.</li>
          <li><strong>Cookies:</strong> We use cookies to enhance your browsing experience, such as remembering your preferences and login status.</li>
        </ul>
      </section>

      <section className="section">
        <h2>2. How We Use Your Information</h2>
        <p>We use your data for several purposes:</p>
        <ul>
          <li>To provide and maintain our services.</li>
          <li>To communicate with you, including sending updates, promotional materials, and service-related announcements.</li>
          <li>To analyze website traffic and user behavior to improve our offerings.</li>
          <li>To ensure compliance with our terms of service and legal obligations.</li>
        </ul>
      </section>

      <section className="section">
        <h2>3. Data Sharing</h2>
        <p>We may share your personal information in certain circumstances:</p>
        <ul>
          <li>With trusted third-party service providers who help us operate our services.</li>
          <li>If required by law, to comply with legal obligations, or to protect our rights and safety.</li>
        </ul>
      </section>

      <section className="section">
        <h2>4. Data Security</h2>
        <p>We use industry-standard security measures to protect your data. However, no method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee absolute security.</p>
      </section>

      <section className="section">
        <h2>5. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access and correct your personal information.</li>
          <li>Request the deletion of your data under certain conditions.</li>
          <li>Object to the processing of your data or restrict its use.</li>
        </ul>
      </section>

      <section className="section">
        <h2>6. Changes to This Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Effective Date".</p>
      </section>

      <section className="section">
        <h2>7. Contact Us</h2>
        <p>If you have any questions or concerns regarding our privacy practices, please contact us at support@example.com.</p>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Example Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
