import React from "react";
import { useNavigate } from "react-router-dom";
import "./PhotographerCard.css";
import defaultImage from "../../Assests/10.png";

const PhotographerCard = ({ photographer }) => {
  const navigate = useNavigate();

  // Use defaultImage if coverPhoto is not available
  const imageSrc = photographer.coverPhoto || defaultImage;

  const handleCardClick = () => {
    navigate("/home", { state: { photographer } });
  };

  return (
    <div className="photographer-card" onClick={handleCardClick}>
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
