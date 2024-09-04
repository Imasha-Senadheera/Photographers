import React, { useState, useEffect } from "react";
import PhotographerCard from "../PhotographerCard/PhotographerCard";
import "./PhotographerList.css";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

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

  const filteredPackages = packages.filter((packageItem) => {
    const matchesKeyword = searchParams.keyword
      ? packageItem.packageName
          .toLowerCase()
          .includes(searchParams.keyword.toLowerCase())
      : true;
    const matchesLocation = searchParams.location
      ? packageItem.location === searchParams.location
      : true;
    const matchesPriceRange = searchParams.priceRange
      ? packageItem.price >=
          parseInt(searchParams.priceRange.split(" ")[1].replace(/,/g, "")) &&
        packageItem.price <=
          parseInt(searchParams.priceRange.split(" ")[3].replace(/,/g, ""))
      : true;

    return matchesKeyword && matchesLocation && matchesPriceRange;
  });

  if (loading) {
    return <p>Loading...</p>;
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
