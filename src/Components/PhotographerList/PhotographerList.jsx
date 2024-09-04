import React, { useState, useEffect } from "react";
import PhotographerCard from "../PhotographerCard/PhotographerCard";
import "./PhotographerList.css";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const PhotographerList = () => {
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

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  return (
    <div className="photographer-list">
      {packages.length === 0 ? (
        <p>No packages available.</p>
      ) : (
        packages.map((packageItem) => (
          <PhotographerCard key={packageItem.id} photographer={packageItem} />
        ))
      )}
    </div>
  );
};

export default PhotographerList;
