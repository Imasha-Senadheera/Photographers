import React, { useState } from "react";
import PhotographerCard from "../PhotographerCard/PhotographerCard";
import "./PhotographerList.css";
import defaultImage from "../../Assests/10.png";

// Sample default photographer data with Sri Lankan prices and locations
const defaultPhotographers = [
  {
    id: 1,
    name: "John Doe",
    image: defaultImage,
    category: "Wedding",
    priceRange: "Rs 20,000 - Rs 50,000",
    location: "Colombo",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Jane Smith",
    image: defaultImage,
    category: "Portrait",
    priceRange: "Rs 10,000 - Rs 20,000",
    location: "Kandy",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Alex Johnson",
    image: defaultImage,
    category: "Event",
    priceRange: "Rs 15,000 - Rs 30,000",
    location: "Galle",
    rating: 4.2,
  },
];

const PhotographerList = () => {
  const [photographers, setPhotographers] = useState(defaultPhotographers);
  const [loading, setLoading] = useState(false); // Set to false to avoid loading state
  const [error, setError] = useState(null);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  return (
    <div className="photographer-list">
      {photographers.length === 0 ? (
        <p>No photographers available.</p>
      ) : (
        photographers.map((photographer) => (
          <PhotographerCard key={photographer.id} photographer={photographer} />
        ))
      )}
    </div>
  );
};

export default PhotographerList;
