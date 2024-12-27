// ClientWelcomePage.jsx

import React from "react";
import "./ClientWelcomePage.css";

const images = {
    "Graphic Design": "src/assets/category/graphic-design.png",
    "Custom Animation": "src/assets/category/custom-animation.png",
    "Illustration": "src/assets/category/illustration.png",
    "Flyers & Vectors": "src/assets/category/flyers-&-vectors.png",
    "Logo Design": "src/assets/category/logo-design.png",
    "Social Graphics": "src/assets/category/social-graphics.png",
    "Article Writing": "src/assets/category/article-writing.png",
    "Video Editing": "src/assets/category/video-editing.png",
  };

const ClientWelcomePage = () => {
  return (
    <div className="client-welcome-page">
{/* Header Section */}
<header className="client-welcome-header">
  <div className="header-content">
    <h1>Find Freelancers for Your Projects</h1>
    <p>Get your projects done with top-rated freelancers.</p>
    <div className="button-group">
      <a href="/hire-freelancer" className="btn btn-primary">Hire a Freelancer</a>
      <a href="/post-job" className="btn btn-secondary">Post a Job</a>
      <a href="/Services" className="btn btn-tertiary">Search Service</a>
    </div>
  </div>
  <div className="header-image">
    <img
      src="src/assets/images/client-welcome.png"
      alt="Client Dashboard Illustration"
    />
  </div>
</header>


     {/* Categories Section */}
     <section className="categories">
        <h2>Explore Categories</h2>
        <div className="category-grid">
          {[
            "Graphic Design",
            "Custom Animation",
            "Illustration",
            "Flyers & Vectors",
            "Logo Design",
            "Social Graphics",
            "Article Writing",
            "Video Editing",
          ].map((category) => (
            <div key={category} className="category-card">
              <div className="category-image-wrapper">
                <img
                  className="category-image"
                  src={images[category]}
                  alt={category}
                />
                <div className="category-name">
                  <h3>{category}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Categories Button */}
        <div className="view-categories-button-wrapper">
          <a href="/category" className="view-categories-button">
            View All Categories
          </a>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio">
        <h2>Check Out The Best Portfolios</h2>
        <div className="portfolio-slider">
          {[
            { name: "Bunny Design", role: "UI/UX Designer" },
            { name: "Bhaskar Tiwari", role: "Graphic Designer" },
            { name: "Akshar Joshi", role: "Web Designer" },
          ].map((portfolio, index) => (
            <div key={index} className="portfolio-card">
              <img
                src={`src/assets/portfolios/portfolio-${index + 1}.png`}
                alt={portfolio.name}
              />
              <h3>{portfolio.name}</h3>
              <p>{portfolio.role}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default ClientWelcomePage;
