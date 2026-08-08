import React, { useState } from "react";
import "./Report.css";

const Report = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    issue: "",
    details: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Report Submitted:", form);
    setSubmitted(true);
    // Reset form
    setForm({ name: "", email: "", issue: "", details: "" });
  };

  return (
    <div className="report-problem-container">
      <h1>Report a Problem</h1>
      <p>
        If you're experiencing any issues, please fill out the form below to report them. Our team will review your submission and get back to you promptly.
      </p>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="report-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="issue">Issue</label>
            <select
              id="issue"
              name="issue"
              value={form.issue}
              onChange={handleChange}
              required
            >
              <option value="">Select an issue</option>
              <option value="login-problem">Login Problem</option>
              <option value="payment-issue">Payment Issue</option>
              <option value="bug">Bug Report</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="details">Details</label>
            <textarea
              id="details"
              name="details"
              value={form.details}
              onChange={handleChange}
              required
              placeholder="Provide detailed information about the issue"
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Submit Report
          </button>
        </form>
      ) : (
        <div className="thank-you-message">
          <h2>Thank You!</h2>
          <p>Your report has been submitted. We'll review it and get back to you shortly.</p>
        </div>
      )}
    </div>
  );
};

export default Report;
