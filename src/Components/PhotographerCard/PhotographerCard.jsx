import React from "react";
import "./PhotographerCard.css";
import defaultImage from "../../Assests/10.png"; 

const PhotographerCard = ({ photographer }) => {
  // Use defaultImage if photographer.image is not available
  const imageSrc = photographer.image || defaultImage;

  return (
    <div className="photographer-card">
      <img src={imageSrc} alt={photographer.name} />
      <div className="photographer-info">
        <h3>{photographer.name}</h3>
        <p>{photographer.category}</p>
        <p>Price range: {photographer.priceRange}</p>
        <p>Rating: {photographer.rating} / 5</p>
      </div>
    </div>
  );
};

export default PhotographerCard;
