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

        setUserData(photographer);
        console.log("Fetched user data:", userData); // Debugging log
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
        {/* Left Side - Images */}
        <div className="lg:col-span-2 flex flex-col gap-6">
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

        {/* Right Side - Blue Card */}
        <div className="lg:col-span-1 flex  flex-col gap-6 font-sans">
          <div className="bg-gray-50 p-6 border-2  border-blue-700 rounded-lg shadow-lg">
            {loading ? (
              <p>Loading...</p>
            ) : (
              userData && (
                <>
                  <div className="mb-4">
                    <h2 className="text-2xl animate-pulse font-bold text-blue-700">
                      {userData.packageName || "N/A"}
                    </h2>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-700">
                      {userData.packageDescription ||
                        "No description available."}
                    </p>
                  </div>

                  <div className="mb-4 cursor-grab">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="flex items-center space-x-2 p-4 border hover:bg-blue-100 border-gray-200 rounded-lg shadow-sm">
                        <span className="text-md">PRICE &nbsp;:</span>
                        <span className="text-lg font-semibold">
                          {userData.price || "N/A"}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 p-4 border hover:bg-blue-100 border-gray-200 rounded-lg shadow-sm">
                        <span className="text-md">DURATION &nbsp;:</span>
                        <span className="text-lg font-semibold">
                          {userData.duration || "N/A"}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 p-4 border hover:bg-blue-100 border-gray-200 rounded-lg shadow-sm">
                        <span className="text-md">CATEGORY &nbsp;:</span>
                        <span className="text-lg font-semibold">
                          {userData.category || "N/A"}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 p-4 border hover:bg-blue-100 border-gray-200 rounded-lg shadow-sm">
                        <span className="text-md">LOCATION &nbsp;:</span>
                        <span className="text-lg font-semibold">
                          {userData.location || "N/A"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-2">
                      Social Links
                    </h3>
                    <div className="flex gap-4 text-2xl text-[#003366]">
                      <a
                        href={userData?.facebook || "https://facebook.com"}
                        aria-label="Facebook"
                        className="hover:text-blue-500"
                      >
                        <FaFacebook />
                      </a>
                      <a
                        href={userData?.whatsapp || "https://whatsapp.com"}
                        aria-label="WhatsApp"
                        className="hover:text-green-500"
                      >
                        <FaWhatsapp />
                      </a>
                      <a
                        href={userData?.instagram || "https://instagram.com"}
                        aria-label="Instagram"
                        className="hover:text-pink-500"
                      >
                        <AiFillInstagram />
                      </a>
                    </div>
                  </div>
                </>
              )
            )}
          </div>
        </div>
      </div>
      <hr className="border-white-300 mx-6 lg:mx-10 mt-14" />
      <Footer />
    </>
  );
};

export default PackageDetails;
