import React, { useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebaseConfig";
import { signOut, onAuthStateChanged } from "firebase/auth";
import "./Header.css"; // Make sure to import your CSS file

const Header = ({ isMainPage }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Set up Firebase Auth listener
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const loginLogoutHandler = () => {
    if (user) {
      signOut(auth)
        .then(() => {
          navigate("/signin");
        })
        .catch((error) => {
          console.error("Error signing out: ", error);
        });
    } else {
      navigate("/signin");
    }
  };

  return (
    <div className="header-container">
      <div className="header-content">
        <div className="nav-links">
          {isMainPage ? (
            <div className="links">
              <div className="cursor-pointer">Home</div>
              <div className="cursor-pointer">About Us</div>
              <div className="cursor-pointer">FAQs</div>
            </div>
          ) : !user ? (
            <div className="links">
              <div className="cursor-pointer">Home</div>
              <div className="cursor-pointer">About Us</div>
              <div className="cursor-pointer">FAQs</div>
            </div>
          ) : (
            <div>Dashboard</div>
          )}
        </div>
        <div className="header-actions">
          {user && !isMainPage && (
            <div className="user-info">
              <MdSearch />
              <IoNotifications />
              <div>{user.displayName || "User"}</div>
              <FaUserCircle className="text-3xl" />
            </div>
          )}
          <button onClick={loginLogoutHandler} className="auth-button">
            {user ? "Logout" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
