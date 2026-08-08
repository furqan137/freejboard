import React from 'react';
import './HireFreelancer.css'; // Import the CSS file for styling

const HireFreelancer = () => {
  return (
    <div className="hire-freelancer-page">
      {/* Page Header */}
      <header className="page-header">
        <h1>Hire Top Freelancers for Your Projects</h1>
        <p>Explore a wide range of talented freelancers to bring your ideas to life.</p>
      </header>

      {/* Filter Section */}
      <section className="filters-section">
        <h2>Filters</h2>
        <div className="filters">
          <select>
            <option value="">Select Category</option>
            <option value="web-development">Web Development</option>
            <option value="graphic-design">Graphic Design</option>
            <option value="digital-marketing">Digital Marketing</option>
            <option value="writing">Content Writing</option>
          </select>

          <select>
            <option value="">Experience Level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </select>

          <select>
            <option value="">Sort By</option>
            <option value="rating">Highest Rating</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
          </select>

          <button className="btn btn-primary">Apply Filters</button>
        </div>
      </section>

      {/* Freelancer Profiles */}
      <section className="freelancers-section">
        <h2>Top Freelancers</h2>
        <div className="freelancer-cards">
          {/* Freelancer Card 1 */}
          <div className="freelancer-card">
            <img src="src/assets/images/freelancer1.jpg" alt="Freelancer 1" />
            <h3>John Doe</h3>
            <p>Web Developer</p>
            <p className="rating">⭐⭐⭐⭐⭐ (4.9)</p>
            <p className="price">$50/hr</p>
            <a href="/freelancer-profile/john-doe" className="btn btn-secondary">
              View Profile
            </a>
          </div>

          {/* Freelancer Card 2 */}
          <div className="freelancer-card">
            <img src="src/assets/images/freelancer2.jpg" alt="Freelancer 2" />
            <h3>Jane Smith</h3>
            <p>Graphic Designer</p>
            <p className="rating">⭐⭐⭐⭐ (4.8)</p>
            <p className="price">$40/hr</p>
            <a href="/freelancer-profile/jane-smith" className="btn btn-secondary">
              View Profile
            </a>
          </div>

          {/* Add more freelancer cards as needed */}
        </div>
      </section>
    </div>
  );
};

export default HireFreelancer;
