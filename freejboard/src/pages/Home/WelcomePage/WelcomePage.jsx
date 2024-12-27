import React from "react";
import "./WelcomePage.css";

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

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      {/* Header Section */}
      <header className="welcome-header">
        <div className="header-content">
          <h1>
            Find The Best <span className="highlight">Jobs</span> &amp;{" "}
            <span className="highlight">Professionals</span> Here
          </h1>
          <p>
            Join FreejBoard today to connect with talented freelancers or find
            amazing job opportunities. Explore a world of possibilities.
          </p>
        </div>
        <div className="header-image">
          <img
            src="src/assets/images/welcome-header.png"
            alt="Welcome Illustration"
          />
        </div>
      </header>
    
      {/* Info Cards Section */}
      <section className="info-cards">
        <div className="info-cards-container">
          <div className="info-card">
            <a href="/sign-up" className="info-card-link">
              <div className="info-card-button">
                <img
                  src="/src/assets/icons/join-now-icon.png"
                  alt="Join Now"
                  className="info-card-icon"
                />
                <h3>Join Now</h3>
                <p>Create an account and get started today.</p>
              </div>
            </a>
          </div>
          <div className="info-card">
            <a href="/featured-companies" className="info-card-link">
              <div className="info-card-button">
                <img
                  src="/src/assets/icons/featured-companies-icon.png"
                  alt="Featured Companies"
                  className="info-card-icon"
                />
                <h3>Featured Companies</h3>
                <p>Explore top companies to collaborate with.</p>
              </div>
            </a>
          </div>
          <div className="info-card">
            <a href="/Services" className="info-card-link">
              <div className="info-card-button">
                <img
                  src="/src/assets/icons/search-work-icon.png"
                  alt="Search Work"
                  className="info-card-icon"
                />
                <h3>Search Work</h3>
                <p>Discover the best freelance opportunities here.</p>
              </div>
            </a>
          </div>
        </div>
        <div className="info-cards-image">
          <img
            src="src/assets/images/search-work-icon.png"
            alt="Illustration for Info Cards Section"
          />
        </div>
      </section>

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

export default WelcomePage;
