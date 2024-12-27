import React from "react";
import './FreelancerWelcomePage.css';

const companies = [
    { id: 1, name: "InnoSoft", description: "Innovating solutions for the future.", website: "https://innosoft.com/", logo: "src/assets/featured-companies/innosoft.png" },
    { id: 2, name: "GreenWave", description: "Eco-friendly energy solutions.", website: "https://www.greenwave.org/", logo: "src/assets/featured-companies/greenwave.jpg" },
    { id: 3, name: "UrbanTech", description: "Smart city technology development.", website: "https://www.urbantech.com/", logo: "src/assets/featured-companies/urbantech.png" },
    { id: 4, name: "TechPioneers", description: "Shaping the digital landscape.", website: "https://techpioneers.co.in/", logo: "src/assets/featured-companies/techpioneers.png" },
];

const remoteJobs = [
    { id: 1, title: "Backend Engineer", company: "TechCorp", location: "Remote", description: "Develop and maintain server-side logic, APIs, and databases.", salary: "$90,000 - $120,000" },
    { id: 2, title: "UI/UX Designer", company: "DesignStudio", location: "Remote", description: "Create user-friendly and visually appealing designs.", salary: "$70,000 - $90,000" },
    { id: 3, title: "Cloud Architect", company: "CloudBase", location: "Remote", description: "Design and manage scalable cloud infrastructure.", salary: "$110,000 - $140,000" },
];

const FreelancerWelcomePage = () => {
  return (
    <div className="freelancer-welcome-page">
      {/* Welcome Section */}
{/* Welcome Section */}
<section className="welcome-section">
  <div className="welcome-content">
    <h1>Find Work That Matches Your Skills!</h1>
    <p>Connect with clients and grow your freelance business.</p>
    <div className="button-group">
      <a href="/JobPostings" className="btn btn-primary">Search Jobs</a>
      <a href="/offer-services" className="btn btn-secondary">Offer Your Services</a>
      <a href="/Services" className="btn btn-tertiary">Search Service</a>
    </div>
  </div>
  <div className="welcome-image">
    <img
      src="src/assets/images/freelancer-welcome.png"
      alt="Freelancer Welcome Illustration"
    />
  </div>
</section>


<section className="featured-companies-section">
    <h2>Featured Companies</h2>
    <p>Explore our top-rated companies leading innovation across various industries.</p>
    <div className="company-list">
        {companies.map(company => (
            <div key={company.id} className="company-card">
                <div 
                    className="company-logo" 
                    style={{ backgroundImage: `url(${company.logo})` }} 
                    alt={`${company.name} logo`}
                ></div>
                <h3>{company.name}</h3>
                <p>{company.description}</p>
                <a href={company.website} target="_blank" rel="noopener noreferrer" className="company-link">
                    Visit Website
                </a>
            </div>
        ))}
    </div>
</section>;

<div className="remote-job-listings">
            <h2>Remote Job Listings</h2>
            <p>Discover the latest opportunities to work remotely with top companies worldwide.</p>
            <ul className="remote-job-list">
                {remoteJobs.map(job => (
                    <li key={job.id} className="remote-job-card">
                        <h3>{job.title}</h3>
                        <p className="job-company">Company: {job.company}</p>
                        <p className="job-location">Location: {job.location}</p>
                        <p className="job-description">{job.description}</p>
                        <p className="job-salary">Salary: {job.salary}</p>
                        <button className="apply-button">Apply Now</button>
                    </li>
                ))}
            </ul>
        </div>


      {/* Featured Jobs Section */}
      <section className="featured-jobs">
        <h2>Featured Jobs for You</h2>
        <div className="job-cards">
          {[1, 2, 3].map((job, index) => (
            <div key={index} className="job-card">
              <h3>Job Title {index + 1}</h3>
              <p>
                Looking for a professional to handle [specific task]. Competitive pay and long-term opportunities.
              </p>
              <a href={`/job-details/${index + 1}`} className="apply-now">
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </section> 
 
    </div>
  );
};

export default FreelancerWelcomePage;
