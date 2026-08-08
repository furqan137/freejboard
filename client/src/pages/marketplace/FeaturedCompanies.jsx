import React from "react";
import './FeaturedCompanies.css';

const FeaturedCompanies = () => {
    const companies = [
        { id: 1, name: "InnoSoft", description: "Innovating solutions for the future.", website: "https://innosoft.com/", logo: "src/assets/featured-companies/innosoft.png" },
        { id: 2, name: "GreenWave", description: "Eco-friendly energy solutions.", website: "https://www.greenwave.org/", logo: "src/assets/featured-companies/greenwave.jpg" },
        { id: 3, name: "UrbanTech", description: "Smart city technology development.", website: "https://www.urbantech.com/", logo: "src/assets/featured-companies/urbantech.png" },
        { id: 4, name: "TechPioneers", description: "Shaping the digital landscape.", website: "https://techpioneers.co.in/", logo: "src/assets/featured-companies/techpioneers.png" },
    ];

    return (
        <div className="featured-companies">
            <h2>Featured Companies</h2>
            <p>Explore our top-rated companies leading innovation across various industries.</p>
            <div className="company-list">
                {companies.map(company => (
                    <div key={company.id} className="company-card">
                        <div className="company-logo" style={{ backgroundImage: `url(${company.logo})` }}></div>
                        <h3>{company.name}</h3>
                        <p>{company.description}</p>
                        <a href={company.website} target="_blank" rel="noopener noreferrer" className="company-link">Visit Website</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedCompanies;
