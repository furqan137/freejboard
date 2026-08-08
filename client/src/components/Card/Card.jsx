import React from "react";
import "./Card.css";

const Card = ({ image, title, description, onClick, children }) => {
  return (
    <div className="card" onClick={onClick}>
      {image && <div className="card-image" style={{ backgroundImage: `url(${image})` }}></div>}
      <div className="card-content">
        {title && <h3 className="card-title">{title}</h3>}
        {description && <p className="card-description">{description}</p>}
        <div className="card-actions">{children}</div>
      </div>
    </div>
  );
};

export default Card;
