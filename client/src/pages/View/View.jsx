import React from "react";
import "./View.css";

const View = ({ item }) => {
  const placeholderItem = {
    image: "/assets/images/placeholder.jpg",
    title: "Sample Item",
    description: "This is a detailed description of the item. It provides all the information that a user needs to know.",
    tags: ["Sample", "Demo", "Example"],
  };

  const displayItem = item || placeholderItem;

  return (
    <div className="view-container">
      <div className="view-image" style={{ backgroundImage: `url(${displayItem.image})` }}></div>
      <div className="view-details">
        <h2>{displayItem.title}</h2>
        <p>{displayItem.description}</p>
        <div className="view-tags">
          {displayItem.tags.map((tag, index) => (
            <span key={index} className="view-tag">
              #{tag}
            </span>
          ))}
        </div>
        <div className="view-actions">
          <button className="view-button">Edit</button>
          <button className="view-button delete">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default View;
