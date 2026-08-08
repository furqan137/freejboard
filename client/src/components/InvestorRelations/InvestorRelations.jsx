import React from "react";
import "./InvestorRelations.css";  // Ensure the file path is correct

const InvestorRelations = () => {
  return (
    <div className="page-container">
      <h1 className="title">Investor Relations</h1>
      <p className="intro">Learn more about our financial performance and strategic initiatives. Stay informed with our latest reports and updates.</p>

      <section className="documents">
        <ul>
          <li><a href="#">Annual Reports</a></li>
          <li><a href="#">Quarterly Earnings</a></li>
          <li><a href="#">Investor Presentations</a></li>
          <li><a href="#">Corporate Governance</a></li>
        </ul>
      </section>

      <footer className="footer">
        <p>If you have any inquiries, please contact us at <a href="mailto:investors@yourcompany.com">investors@yourcompany.com</a>.</p>
      </footer>
    </div>
  );
};

export default InvestorRelations;
