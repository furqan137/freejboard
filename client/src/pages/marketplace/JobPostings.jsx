// Enhanced JobPostings.jsx
import React from "react";
import './JobPostings.css';

const JobPostings = () => {
    const jobs = [
        { id: 1, title: "Frontend Developer", type: "On-site", location: "New York, NY", salary: "$85,000 - $95,000", description: "Develop and maintain the user interface for our flagship product." },
        { id: 2, title: "Project Manager", type: "Remote", location: "Remote", salary: "$95,000 - $105,000", description: "Lead cross-functional teams to deliver projects on time and within budget." },
        { id: 3, title: "Data Analyst", type: "On-site", location: "San Francisco, CA", salary: "$70,000 - $80,000", description: "Analyze and interpret complex datasets to support business decisions." },
    ];

    return (
        <div className="job-postings">
            <h2>Available Job Postings</h2>
            <p>Explore our latest job openings and find your perfect fit!</p>
            <ul className="job-list">
                {jobs.map(job => (
                    <li key={job.id} className="job-card">
                        <h3>{job.title}</h3>
                        <p className="job-details">Type: {job.type} | Location: {job.location}</p>
                        <p className="job-salary">Salary: {job.salary}</p>
                        <p className="job-description">{job.description}</p>
                        <button className="apply-button">Apply Now</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JobPostings;