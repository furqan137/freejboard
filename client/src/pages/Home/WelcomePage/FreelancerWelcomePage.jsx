import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../../../assets/images/freelancer-welcome.png";
import "./roleShared.css";
import "./FreelancerWelcomePage.css";

const remoteJobs = [
  {
    id: 1,
    title: "Backend Engineer",
    company: "TechCorp",
    location: "Remote",
    description: "Build APIs, services, and reliable data layers.",
    salary: "$90k – $120k",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "DesignStudio",
    location: "Remote",
    description: "Shape clear product experiences end to end.",
    salary: "$70k – $90k",
  },
  {
    id: 3,
    title: "Cloud Architect",
    company: "CloudBase",
    location: "Remote",
    description: "Design scalable infrastructure for growing teams.",
    salary: "$110k – $140k",
  },
];

const FreelancerWelcomePage = () => {
  return (
    <div className="role-page">
      <section className="role-hero">
        <div className="role-hero__media" aria-hidden="true">
          <img src={heroImage} alt="" />
          <div className="role-hero__shade" />
        </div>
        <div className="role-hero__content">
          <p className="role-hero__brand fj-reveal">Freejboard</p>
          <h1 className="fj-reveal fj-reveal-delay-1">Find work that matches your craft</h1>
          <p className="fj-reveal fj-reveal-delay-2">
            Discover briefs, publish services, and grow with clients who value quality.
          </p>
          <div className="role-hero__cta fj-reveal fj-reveal-delay-3">
            <Link to="/JobPostings" className="fj-btn fj-btn--solid welcome-btn">
              Search jobs
            </Link>
            <Link to="/offer-services" className="fj-btn fj-btn--ghost welcome-btn welcome-btn--light">
              Offer services
            </Link>
          </div>
        </div>
      </section>

      <section className="role-section">
        <div className="role-section__head">
          <h2>Remote opportunities</h2>
          <p>Fresh roles you can apply to today.</p>
        </div>
        <div className="role-job-grid">
          {remoteJobs.map((job) => (
            <article key={job.id} className="role-job">
              <div className="role-job__top">
                <h3>{job.title}</h3>
                <span>{job.location}</span>
              </div>
              <p className="role-job__company">{job.company}</p>
              <p>{job.description}</p>
              <div className="role-job__footer">
                <strong>{job.salary}</strong>
                <Link to="/JobPostings" className="fj-btn fj-btn--solid">
                  Apply
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="role-section__action">
          <Link to="/RemoteJobListings" className="fj-btn fj-btn--ghost">
            View all remote jobs
          </Link>
        </div>
      </section>

      <section className="role-section role-section--accent">
        <div className="role-section__head role-section__head--light">
          <h2>Grow your presence</h2>
          <p>Make it easy for clients to find and hire you.</p>
        </div>
        <div className="role-path-grid">
          <Link to="/offer-services" className="role-path">
            <h3>Publish a service</h3>
            <p>Showcase deliverables, pricing, and turnaround.</p>
            <span>Get started →</span>
          </Link>
          <Link to="/profile" className="role-path">
            <h3>Polish your profile</h3>
            <p>Add portfolio pieces and strengthen your pitch.</p>
            <span>Edit profile →</span>
          </Link>
          <Link to="/Services" className="role-path">
            <h3>Explore the market</h3>
            <p>See what peers offer and where demand is rising.</p>
            <span>Browse services →</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FreelancerWelcomePage;
