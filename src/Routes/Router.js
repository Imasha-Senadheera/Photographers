import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../Pages/MainPage/MainPage";
import SignInForm from "../Pages/SignInForm/SignInForm";
import SignUpForm from "../Pages/SignUpForm/SignUpForm"; // Import SignUpForm

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/signin" element={<SignInForm />} />
      <Route path="/signup" element={<SignUpForm />} />{" "}
      {/* Define the route for SignUpForm */}
    </Routes>
  );
};

export default Router;
