// Enhanced Profile.jsx for Freelancer and Buyer Profiles
import React from "react";
import "./Profile.css";

const Profile = ({ user, isFreelancer, onEdit, onMessage }) => {
  const placeholderUser = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "(123) 456-7890",
    address: "123 Main Street, Hometown, USA",
    profileImage: "src/assets/images/logo.png",
    skills: ["Web Development", "UI/UX Design", "SEO Optimization"],
    services: ["Website Creation", "App Design", "Digital Marketing"],
    reviews: [
      { reviewer: "Jane Smith", rating: 5, comment: "Excellent work!" },
      { reviewer: "Mike Johnson", rating: 4, comment: "Very professional." }
    ]
  };

  const displayUser = user || placeholderUser;

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={displayUser.profileImage} alt="Profile" className="profile-image" />
        <h2 className="profile-name">{displayUser.name}</h2>
        <p className="profile-email">Email: {displayUser.email}</p>
        <p className="profile-phone">Phone: {displayUser.phone}</p>
        <p className="profile-address">Address: {displayUser.address}</p>
      </div>

      {isFreelancer && (
        <div className="profile-section">
          <h3>Skills</h3>
          <ul className="skills-list">
            {displayUser.skills.map((skill, index) => (
              <li key={index} className="skill-item">{skill}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="profile-section">
        <h3>Services</h3>
        <ul className="services-list">
          {displayUser.services.map((service, index) => (
            <li key={index} className="service-item">{service}</li>
          ))}
        </ul>
      </div>

      <div className="profile-section">
        <h3>Reviews</h3>
        <ul className="reviews-list">
          {displayUser.reviews.map((review, index) => (
            <li key={index} className="review-item">
              <strong>{review.reviewer}</strong>: {"⭐".repeat(review.rating)} - {review.comment}
            </li>
          ))}
        </ul>
      </div>

      <div className="profile-actions">
        <button className="profile-edit-button" onClick={onEdit}>Edit Profile</button>
        <button className="profile-message-button" onClick={onMessage}>Message</button>
        <button className="profile-logout-button">Logout</button>
      </div>
    </div>
  );
};

export default Profile;
