import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../../../assets/images/client-welcome.png";
import graphicDesign from "../../../assets/category/graphic-design.png";
import customAnimation from "../../../assets/category/custom-animation.png";
import illustration from "../../../assets/category/illustration.png";
import flyers from "../../../assets/category/flyers-&-vectors.png";
import logoDesign from "../../../assets/category/logo-design.png";
import socialGraphics from "../../../assets/category/social-graphics.png";
import articleWriting from "../../../assets/category/article-writing.png";
import videoEditing from "../../../assets/category/video-editing.png";
import portfolio1 from "../../../assets/portfolios/portfolio-1.png";
import portfolio2 from "../../../assets/portfolios/portfolio-2.png";
import portfolio3 from "../../../assets/portfolios/portfolio-3.png";
import "./roleShared.css";
import "./ClientWelcomePage.css";

const categories = [
  { name: "Graphic Design", image: graphicDesign, to: "/graphic-design" },
  { name: "Custom Animation", image: customAnimation, to: "/video-animation" },
  { name: "Illustration", image: illustration, to: "/graphic-design" },
  { name: "Flyers & Vectors", image: flyers, to: "/graphic-design" },
  { name: "Logo Design", image: logoDesign, to: "/graphic-design" },
  { name: "Social Graphics", image: socialGraphics, to: "/social-media-management" },
  { name: "Article Writing", image: articleWriting, to: "/content-writing" },
  { name: "Video Editing", image: videoEditing, to: "/video-animation" },
];

const portfolios = [
  { name: "Bunny Design", role: "UI/UX Designer", image: portfolio1 },
  { name: "Bhaskar Tiwari", role: "Graphic Designer", image: portfolio2 },
  { name: "Akshar Joshi", role: "Web Designer", image: portfolio3 },
];

const ClientWelcomePage = () => {
  return (
    <div className="role-page">
      <section className="role-hero">
        <div className="role-hero__media" aria-hidden="true">
          <img src={heroImage} alt="" />
          <div className="role-hero__shade" />
        </div>
        <div className="role-hero__content">
          <p className="role-hero__brand fj-reveal">Freejboard</p>
          <h1 className="fj-reveal fj-reveal-delay-1">Hire freelancers for your next project</h1>
          <p className="fj-reveal fj-reveal-delay-2">
            Post a brief, compare specialists, and move from idea to delivery.
          </p>
          <div className="role-hero__cta fj-reveal fj-reveal-delay-3">
            <Link to="/hire-freelancer" className="fj-btn fj-btn--solid welcome-btn">
              Hire talent
            </Link>
            <Link to="/post-job" className="fj-btn fj-btn--ghost welcome-btn welcome-btn--light">
              Post a job
            </Link>
          </div>
        </div>
      </section>

      <section className="role-section">
        <div className="role-section__head">
          <h2>Browse by category</h2>
          <p>Find the right craft for your brief.</p>
        </div>
        <div className="role-category-grid">
          {categories.map((category) => (
            <Link key={category.name} to={category.to} className="role-category">
              <img src={category.image} alt="" />
              <span>{category.name}</span>
            </Link>
          ))}
        </div>
        <div className="role-section__action">
          <Link to="/category" className="fj-btn fj-btn--solid">
            View all categories
          </Link>
        </div>
      </section>

      <section className="role-section role-section--soft">
        <div className="role-section__head">
          <h2>Top portfolios</h2>
          <p>Creators clients keep coming back to.</p>
        </div>
        <div className="role-portfolio-grid">
          {portfolios.map((item) => (
            <article key={item.name} className="role-portfolio">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.role}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ClientWelcomePage;
