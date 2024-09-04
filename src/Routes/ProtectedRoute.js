import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebaseConfig"; // Adjust the import based on your project structure
import { onAuthStateChanged } from "firebase/auth";

const ProtectedRoute = ({ element, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // You can add a loading spinner here
  }

  return isAuthenticated ? element : <Navigate to="/signin" />;
};

export default ProtectedRoute;
