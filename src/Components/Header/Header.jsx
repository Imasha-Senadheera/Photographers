import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = ({ isMainPage }) => {
  const [isLogged, setIsLogged] = useState(
    JSON.parse(localStorage.getItem("isLogged")) || false
  );
  const navigate = useNavigate();

  const loginLogoutHandler = () => {
    if (!isLogged) {
      localStorage.setItem("isLogged", true);
      setIsLogged(true);
      navigate("/dashboard");
    } else {
      localStorage.removeItem("isLogged");
      setIsLogged(false);
      navigate("/");
    }
  };

  return (
    <div className="flex bg-black text-white py-6 px-6 items-center font-bold">
      <div className="flex-grow flex justify-center">
        {isMainPage ? (
          <div className="flex gap-12">
            <div className="cursor-pointer">Home</div>
            <div className="cursor-pointer">About Us</div>
            <div className="cursor-pointer">FAQs</div>
          </div>
        ) : !isLogged ? (
          <div className="flex gap-12">
            <div className="cursor-pointer">Home</div>
            <div className="cursor-pointer">About Us</div>
            <div className="cursor-pointer">FAQs</div>
          </div>
        ) : (
          <div>Dashboard</div>
        )}
      </div>
      <div className="flex items-center gap-6">
        {isLogged && !isMainPage && (
          <div className="flex gap-6 items-center mr-4">
            <MdSearch />
            <IoNotifications />
            <div>Pasindu Maneesha</div>
            <FaUserCircle className="text-3xl" />
          </div>
        )}
        <button
          onClick={loginLogoutHandler}
          className="bg-blue-700 text-white px-4 py-2 rounded-full"
        >
          {isLogged ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Header;
