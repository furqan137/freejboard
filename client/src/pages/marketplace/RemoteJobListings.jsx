// Enhanced RemoteJobListings.jsx
import React from "react";
import './RemoteJobListings.css';

const RemoteJobListings = () => {
    const remoteJobs = [
        { id: 1, title: "Backend Engineer", company: "TechCorp", location: "Remote", description: "Develop and maintain server-side logic, APIs, and databases.", salary: "$90,000 - $120,000" },
        { id: 2, title: "UI/UX Designer", company: "DesignStudio", location: "Remote", description: "Create user-friendly and visually appealing designs.", salary: "$70,000 - $90,000" },
        { id: 3, title: "Cloud Architect", company: "CloudBase", location: "Remote", description: "Design and manage scalable cloud infrastructure.", salary: "$110,000 - $140,000" },
    ];

    return (
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
    );
};

export default RemoteJobListings;
