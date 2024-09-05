import React, { useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebaseConfig";
import { signOut, onAuthStateChanged } from "firebase/auth";
import "./Header.css";

const Header = ({ isMainPage }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Set up Firebase Auth listener
    console.log("Setting up Firebase Auth listener...");
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Auth state changed:", currentUser);
      setUser(currentUser);
    });

    return () => {
      console.log("Cleaning up Firebase Auth listener");
      unsubscribe();
    };
  }, []);

  const loginLogoutHandler = () => {
    if (user) {
      console.log("Logging out user:", user.email);
      signOut(auth)
        .then(() => {
          // Update local storage after logout
          console.log("Logging out successful");
          localStorage.setItem("isLoggedIn", "false");
          localStorage.removeItem("useremail");

          // Navigate to sign-in page
          navigate("/signin");
        })
        .catch((error) => {
          console.error("Error signing out: ", error);
        });
    } else {
      console.log("No user logged in. Redirecting to sign-in.");
      navigate("/signin");
    }
  };

  return (
    <div className="header-container">
      <div className="header-content">
        <div className="nav-links">
          <div className="links">
            <div className="cursor-pointer" onClick={() => navigate("/")}>
              Home
            </div>
            <div className="cursor-pointer">About Us</div>
            <div className="cursor-pointer">FAQs</div>
            {user && (
              <div
                className="cursor-pointer"
                onClick={() => navigate("/dashboard")}
              >
                Dashboard
              </div>
            )}
          </div>
        </div>
        <div className="header-actions">
          {user && !isMainPage && (
            <div className="user-info">
              <MdSearch />
              <IoNotifications />
              <div>{user.displayName || "User"}</div> {/* Display username */}
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
