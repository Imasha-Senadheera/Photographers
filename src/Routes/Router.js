import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../Pages/MainPage/MainPage';
import SignInForm from '../Pages/SignInForm/SignInForm'; // Import SignInForm

const Router = () => {
  return (
    <Routes>
      {/* Define the route for the MainPage as the root route */}
      <Route path="/" element={<MainPage />} />
      {/* Define the route for SignInForm */}
      <Route path="/signin" element={<SignInForm />} />
      {/* Uncomment and add other routes as needed */}
      {/* <Route path="/signup" element={<SignUpForm />} /> */}
    </Routes>
  );
};

export default Router;
