import React, { useState, useEffect } from "react";
import { db } from "../../firebaseConfig"; // Removed unused imports
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { useLocation } from "react-router-dom";
import ImageCard from "../../Components/ImageCard/ImageCard";
import Cover from "../../Assests/Cover.png";
import Logo from "../../Assests/logo.png";
import { FaFacebook, FaUserCircle, FaWhatsapp } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./PackageDetails.css";

const PackageDetails = (props) => {
  const location = useLocation();
  const photographer = location.state?.photographer;

  const [packages, setPackages] = useState([]);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("-------------------------");
    console.log(photographer);
    console.log("-------------------------");
    const fetchPackages = async () => {
      try {
        setPackages(photographer.samplePhotos);
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    };

    const fetchUserData = async () => {
      try {
        if (!photographer?.id) {
          console.error("Photographer ID is missing.");
          return;
        }

        const userDoc = doc(db, "users", photographer.id); // Corrected collection name
        const userSnapshot = await getDoc(userDoc);
        if (userSnapshot.exists()) {
          const userData = userSnapshot.data();
          setUserData(userData);
          console.log("Fetched user data:", userData); // Debugging log
        } else {
          console.log("No user data found for ID:", photographer.id); // Debugging log
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
    if (photographer) {
      fetchUserData();
    }
  }, [photographer]);

  return (
    <>
      <Header />
      <div className="relative w-full h-80 bg-light-blue">
        <img
          src={Cover}
          alt="Cover"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <img src={Logo} alt="Logo" className="absolute top-4 left-4 w-32" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 lg:p-10 bg-light-blue">
        <div className="lg:col-span-2 flex flex-col gap-6 ml-6 lg:ml-10">
          {loading ? (
            <LoadingSpinner />
          ) : (
            <>
              <div className="flex items-center gap-5">
                <div className="w-24 h-24 relative">
                  {photographer?.profilePicture ? (
                    <img
                      src={photographer.profilePicture}
                      alt="Profile"
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <FaUserCircle className="text-6xl text-gray-400 w-full h-full" />
                  )}
                </div>
                <div>
                  <p className="text-2xl font-semibold">
                    {photographer?.organizationName || "Organization Name"}
                  </p>
                  <p className="text-sm">
                    {photographer?.location || "Location"}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {packages.length > 0 ? (
                  photographer.samplePhotos.map((photoUrl, index) => (
                    <ImageCard key={index} imageUrl={photoUrl} />
                  ))
                ) : (
                  <p>No photos available</p>
                )}
              </div>
            </>
          )}
        </div>

        <div className="lg:col-span-1 flex flex-col gap-6 mr-16">
          <div className="bg-white p-4 border-2 border-blue-700 rounded-lg">
            <div className="mb-4">
              <p className="text-xl font-bold text-blue-700">About</p>
              {loading ? (
                <p>Loading...</p>
              ) : (
                userData && (
                  <ul className="list-disc pl-5 mt-2 text-sm">
                    <li>Package Name: {userData.packageName || "N/A"}</li>
                    <li>Description: {userData.packageDescription || "N/A"}</li>
                    <li>Price: {userData.price || "N/A"}</li>
                    <li>Duration: {userData.duration || "N/A"}</li>
                    <li>Category: {userData.category || "N/A"}</li>
                    <li>Location: {userData.location || "N/A"}</li>
                  </ul>
                )
              )}
            </div>

            <div className="mb-4">
              <p className="text-xl font-bold text-blue-700">Social Links</p>
              <div className="flex gap-4 text-2xl text-[#003366] mt-2">
                <a
                  href={userData?.facebook || "https://facebook.com"}
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  href={userData?.whatsapp || "https://whatsapp.com"}
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href={userData?.instagram || "https://instagram.com"}
                  aria-label="Instagram"
                >
                  <AiFillInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-white-300 mx-6 lg:mx-10 mt-14" />
      <Footer />
    </>
  );
};

export default PackageDetails;
