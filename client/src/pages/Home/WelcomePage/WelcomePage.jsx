import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import heroImage from "../../../assets/images/welcome-header.png";
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
import "./WelcomePage.css";

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

const WelcomePage = () => {
  const revealRef = useRef(null);

  useEffect(() => {
    const root = revealRef.current;
    if (!root) return;

    const items = root.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="welcome" ref={revealRef}>
      <section className="welcome-hero">
        <div className="welcome-hero__media" aria-hidden="true">
          <img src={heroImage} alt="" className="welcome-hero__img" />
          <div className="welcome-hero__shade" />
        </div>

        <div className="welcome-hero__content">
          <p className="welcome-hero__brand fj-reveal">Freejboard</p>
          <h1 className="fj-reveal fj-reveal-delay-1">
            Hire sharp talent.
            <br />
            Land better work.
          </h1>
          <p className="welcome-hero__lead fj-reveal fj-reveal-delay-2">
            A modern marketplace where clients and freelancers match on craft,
            speed, and trust.
          </p>
          <div className="welcome-hero__cta fj-reveal fj-reveal-delay-3">
            <Link to="/sign-up" className="fj-btn fj-btn--solid welcome-btn">
              Get started
            </Link>
            <Link to="/Services" className="fj-btn fj-btn--ghost welcome-btn welcome-btn--light">
              Browse services
            </Link>
          </div>
        </div>
      </section>

      <section className="welcome-section" data-reveal>
        <div className="welcome-section__head">
          <h2>Explore categories</h2>
          <p>Jump into the disciplines teams hire for most.</p>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.to}
              className="category-tile"
            >
              <img src={category.image} alt="" />
              <div className="category-tile__meta">
                <h3>{category.name}</h3>
                <span>View work</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="welcome-section__action">
          <Link to="/category" className="fj-btn fj-btn--solid">
            View all categories
          </Link>
        </div>
      </section>

      <section className="welcome-paths" data-reveal>
        <div className="welcome-section__head welcome-section__head--light">
          <h2>Choose your path</h2>
          <p>One platform, two ways to move faster.</p>
        </div>
        <div className="path-grid">
          <Link to="/sign-up" className="path-link">
            <h3>Join as a freelancer</h3>
            <p>Build your profile, publish services, and get discovered.</p>
            <span className="path-link__arrow">Continue</span>
          </Link>
          <Link to="/hire-freelancer" className="path-link">
            <h3>Hire with confidence</h3>
            <p>Post a brief, compare proposals, and start collaborating.</p>
            <span className="path-link__arrow">Find talent</span>
          </Link>
          <Link to="/JobPostings" className="path-link">
            <h3>Browse open jobs</h3>
            <p>See live opportunities and apply where you fit best.</p>
            <span className="path-link__arrow">See jobs</span>
          </Link>
        </div>
      </section>

      <section className="welcome-section" data-reveal>
        <div className="welcome-section__head">
          <h2>Featured portfolios</h2>
          <p>A glimpse of creators already shipping on Freejboard.</p>
        </div>
        <div className="portfolio-row">
          {portfolios.map((item) => (
            <article key={item.name} className="portfolio-item">
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WelcomePage;
