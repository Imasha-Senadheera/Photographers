import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../Pages/MainPage/MainPage";
import SignInForm from "../Pages/SignInForm/SignInForm";
import SignUpForm from "../Pages/SignUpForm/SignUpForm";
import Dashboard from "../Pages/Dashboard/Dashboard";
import CustomerDashboard from "../Pages/Dashboard/CustomerDashboard";
import PhotographerListPage from "../Components/PhotographerList/PhotographerList";
import ProtectedRoute from "./ProtectedRoute";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/signin" element={<SignInForm />} />
      <Route path="/signup" element={<SignUpForm />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/customer-dashboard"
        element={
          <ProtectedRoute>
            <CustomerDashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/photographers" element={<PhotographerListPage />} />{" "}
      {/* Added Route for PhotographerListPage */}
    </Routes>
  );
};

export default Router;
