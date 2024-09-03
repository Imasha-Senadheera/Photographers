import React, { useState, useEffect } from "react";
import PhotographerCard from "../PhotographerCard/PhotographerCard";
import "./PhotographerList.css";
import defaultImage from "../../Assests/10.png";

// Sample default photographer data
const defaultPhotographers = [
  {
    id: 1,
    name: "John Doe",
    image: defaultImage,
    category: "Wedding",
    priceRange: "$100 - $500",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Jane Smith",
    image: defaultImage,
    category: "Portrait",
    priceRange: "$200 - $700",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Alex Johnson",
    image: defaultImage,
    category: "Event",
    priceRange: "$150 - $600",
    rating: 4.2,
  },
];

const PhotographerList = () => {
  const [photographers, setPhotographers] = useState(defaultPhotographers);
  const [loading, setLoading] = useState(false); // Set to false to avoid loading state
  const [error, setError] = useState(null);

  // Comment out or remove the fetch logic
  // useEffect(() => {
  //   // Fetch data from your API
  //   fetch("/api/photographers")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setPhotographers(data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //       setError(error);
  //       setLoading(false);
  //     });
  // }, []);

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