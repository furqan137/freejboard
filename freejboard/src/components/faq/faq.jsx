import React from "react";
import "./FAQs.css";

const FAQs = () => {
  return (
    <div className="faqs-container">
      <h1 className="faqs-title">Frequently Asked Questions</h1>
      <p className="faqs-description">
        Here are answers to some of the most commonly asked questions. If you don’t find what you’re looking for, feel free to contact our support team.
      </p>
      <ul className="faqs-list">
        <li>
          <h2>How do I reset my password?</h2>
          <p>You can reset your password by clicking on the "Forgot Password" link on the login page. Follow the instructions sent to your email.</p>
        </li>
        <li>
          <h2>How can I update my account details?</h2>
          <p>Navigate to the "Settings" page in your account dashboard. From there, you can update your personal information.</p>
        </li>
        <li>
          <h2>How do I contact support?</h2>
          <p>You can contact our support team via the "Help & Support" page or by sending an email to support@example.com.</p>
        </li>
        <li>
          <h2>How do I delete my account?</h2>
          <p>To delete your account, please contact our support team. They will guide you through the process.</p>
        </li>
        <li>
          <h2>Where can I find my purchase history?</h2>
          <p>Your purchase history can be found in the "Orders" section of your account dashboard.</p>
        </li>
      </ul>
    </div>
  );
};

export default FAQs;
