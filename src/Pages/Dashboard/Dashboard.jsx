import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import Header from "../../Components/Header/Header";
import AddPhotos from "../../Components/AddPhotos/AddPhotos";
import OverView from "../../Components/OverView/OverView";
import MyDetails from "../../Components/MyDetails/MyDetails";
import Reviews from "../../Components/Reviews/Reviews";
import BudgetCal from "../../Components/BudgetCal/BudgetCal";
import Logo from "../../Assests/logo.png";
import "./Dashboard.css"; 

const Dashboard = () => {
  const [activeButton, setActiveButton] = useState("Overview");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Set up Firebase Auth listener
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate("/signin");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  if (!user) return <div>Loading...</div>; // Show loading indicator while checking authentication

  return (
    <div className="flex min-h-screen">
      <Header isMainPage={false} /> 
      {/* Sidebar */}
      <div className="sidebar fixed top-0 left-0 w-64 h-screen">
        <div className="py-5 px-9">
          <img
            src={Logo}
            alt="Logo"
            className="logo-small mb-9" 
          />
        </div>
        <div className="space-y-2">
          <button
            className={`sidebar-button ${
              activeButton === "Overview" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("Overview")}
          >
            Overview
          </button>
          <button
            className={`sidebar-button ${
              activeButton === "My Profile" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("My Profile")}
          >
            Edit Profile
          </button>
          <button
            className={`sidebar-button ${
              activeButton === "Add Photos" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("Add Photos")}
          >
            Add Packages
          </button>
          <button
            className={`sidebar-button ${
              activeButton === "Reviews" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("Reviews")}
          >
            Reviews
          </button>
          <button
            className={`sidebar-button ${
              activeButton === "Budget Calculator" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("Budget Calculator")}
          >
            Budget Calculator
          </button>
        </div>
      </div>
      {/* Main Content */}
      <div className="main-content">
        {activeButton === "Overview" && <OverView />}
        {activeButton === "Add Photos" && <AddPhotos />}
        {activeButton === "My Profile" && <MyDetails />}
        {activeButton === "Reviews" && <Reviews />}
        {activeButton === "Budget Calculator" && <BudgetCal />}
      </div>
    </div>
  );
};

export default Dashboard;
