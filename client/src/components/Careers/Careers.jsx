import React from "react";
import "./Careers.css";  // Ensure the file path is correct

const Careers = () => {
  return (
    <div className="page-container">
      <h1 className="title">Careers</h1>
      <p className="intro">
        Join our dynamic team and help us build the future. We’re constantly looking for passionate and talented individuals to grow with us. Explore our current job openings below:
      </p>

      <section className="section">
        <h2>Current Openings</h2>
        <ul>
          <li><strong>Software Engineer - Full Stack</strong> - Responsible for developing and maintaining both frontend and backend solutions. Proficiency in JavaScript, React, Node.js, and databases required.</li>
          <li><strong>Marketing Specialist</strong> - Responsible for developing marketing campaigns, social media management, and customer acquisition strategies.</li>
          <li><strong>UI/UX Designer</strong> - Create intuitive user interfaces and enhance user experiences through design thinking and prototyping.</li>
          <li><strong>Data Analyst</strong> - Analyze data to generate actionable insights for decision-making across various departments.</li>
        </ul>
      </section>

      <section className="apply-section">
        <p>If you're interested in any of these positions, please send your resume and a cover letter to <a href="mailto:careers@yourcompany.com">careers@yourcompany.com</a>.</p>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Careers;
