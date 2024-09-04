import React, { useState, useEffect } from "react";
import PhotographerCard from "../PhotographerCard/PhotographerCard";
import "./PhotographerList.css";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const priceRanges = [
  { label: "Rs 5000 - Rs 10000", min: 5000, max: 10000 },
  { label: "Rs 10000 - Rs 20000", min: 10000, max: 20000 },
  { label: "Rs 20000 - Rs 50000", min: 20000, max: 50000 },
  { label: "Rs 50000 - Rs 100000", min: 50000, max: 100000 },
];

const PhotographerList = ({ searchParams }) => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const packagesCollection = collection(db, "packages");
        const packagesSnapshot = await getDocs(packagesCollection);
        const packagesList = packagesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPackages(packagesList);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  const isWithinPriceRange = (price) => {
    const { priceRange } = searchParams;
    if (!priceRange) return true;

    const range = priceRanges.find((r) => r.label === priceRange);
    return range ? price >= range.min && price <= range.max : true;
  };

  const filteredPackages = packages.filter((packageItem) => {
    const { keyword, location } = searchParams;
    const matchesKeyword = keyword
      ? packageItem.packageName.toLowerCase().includes(keyword.toLowerCase())
      : true;
    const matchesLocation = location ? packageItem.location === location : true;
    const matchesPriceRange = isWithinPriceRange(packageItem.price);

    return matchesKeyword && matchesLocation && matchesPriceRange;
  });

  if (loading) {
    return (
      <div className="loading-container">
        <p className="loading-text">Loading packages...</p>
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  return (
    <div className="photographer-list">
      {filteredPackages.length === 0 ? (
        <p>No packages available.</p>
      ) : (
        filteredPackages.map((packageItem) => (
          <PhotographerCard key={packageItem.id} photographer={packageItem} />
        ))
      )}
    </div>
  );
};

export default PhotographerList;
