import React from "react";
import { NavLink } from "react-router-dom";
import DiscoverContainer from "../../components/DiscoverContainer/DiscoverContainer";
import Card from "../../components/Card/Card";
import "./Home.css";

const Home = () => {
  const featuredItems = [
    { id: 1, title: "Freelance Services", description: "Explore freelance opportunities", image: "src/assets/images/freelance.jpg", path: "/services" },
    { id: 2, title: "Job Postings", description: "Browse job postings", image: "src/assets/images/jobs.jpg", path: "/JobPostings" },
    { id: 3, title: "Remote Work", description: "Find remote work options", image: "src/assets/images/remote.jpg", path: "/RemoteJobListings" },
  ];

  return (
    <div className="home">
      <DiscoverContainer />
      <h2 className="home-section-title">Featured Opportunities</h2>
      <div className="home-featured">
        {featuredItems.map((item) => (
          <NavLink key={item.id} to={item.path} className="card-link">
            <Card
              title={item.title}
              description={item.description}
              image={item.image}
            />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Home;
