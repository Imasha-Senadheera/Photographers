import React, { useState } from "react";
import Logo from "../../Assests/logo.png";

const CustomerDashboard = () => {
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
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow ml-64 mt-16 p-10">
        {activeButton === "Overview" && <div>Customer Overview Content</div>}
        {/* Add more content based on active button */}
      </div>
    </div>
  );
};

export default CustomerDashboard;
