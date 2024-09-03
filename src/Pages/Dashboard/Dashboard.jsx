import React, { useState } from "react";
import AddPhotos from "../../Components/AddPhotos/AddPhotos";
import OverView from "../../Components/OverView/OverView";
import MyDetails from "../../Components/MyDetails/MyDetails";
import Reviews from "../../Components/Reviews/Reviews";
import BudgetCal from "../../Components/BudgetCal/BudgetCal"; // Import BudgetCal
import Logo from "../../Assests/logo.png";

const Dashboard = () => {
  const [activeButton, setActiveButton] = useState("Overview");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 w-64 h-screen bg-[#28396f] text-white overflow-y-auto">
        <div className="py-5 px-9">
          <img src={Logo} alt="Logo" className="mb-9" />
        </div>
        <div className="space-y-2">
          <button
            className={`flex text-left w-full px-5 py-2 ${
              activeButton === "Overview" ? "bg-[#314375]" : ""
            }`}
            onClick={() => handleButtonClick("Overview")}
          >
            Overview
          </button>
          <button
            className={`flex text-left w-full px-5 py-2 ${
              activeButton === "My Profile" ? "bg-[#314375]" : ""
            }`}
            onClick={() => handleButtonClick("My Profile")}
          >
            My Profile
          </button>
          <button
            className={`flex text-left w-full px-5 py-2 ${
              activeButton === "Add Photos" ? "bg-[#314375]" : ""
            }`}
            onClick={() => handleButtonClick("Add Photos")}
          >
            Add Photos
          </button>
          <button
            className={`flex text-left w-full px-5 py-2 ${
              activeButton === "Reviews" ? "bg-[#314375]" : ""
            }`}
            onClick={() => handleButtonClick("Reviews")}
          >
            Reviews
          </button>
          <button
            className={`flex text-left w-full px-5 py-2 ${
              activeButton === "Budget Calculator" ? "bg-[#314375]" : ""
            }`}
            onClick={() => handleButtonClick("Budget Calculator")}
          >
            Budget Calculator
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow ml-64 mt-16 p-10">
        {activeButton === "Overview" && <OverView />}
        {activeButton === "Add Photos" && <AddPhotos />}
        {activeButton === "My Profile" && <MyDetails />}
        {activeButton === "Reviews" && <Reviews />}
        {activeButton === "Budget Calculator" && <BudgetCal />}{" "}
        {/* Add this line */}
      </div>
    </div>
  );
};

export default Dashboard;
