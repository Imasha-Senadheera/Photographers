import React from "react";
import "./PhotographerCard.css";
import defaultImage from "../../Assests/10.png";

const PhotographerCard = ({ photographer }) => {
  // Use defaultImage if coverPhoto is not available
  const imageSrc = photographer.coverPhoto || defaultImage;

  return (
    <div className="photographer-card">
      <img src={imageSrc} alt={photographer.packageName} />
      <div className="photographer-info">
        <h3>{photographer.packageName}</h3>
        <p>Price: Rs. {photographer.price}</p>
        <p>Duration: {photographer.duration}</p>
        <p>Location: {photographer.location}</p>
      </div>
    </div>
  );
};

export default PhotographerCard;
