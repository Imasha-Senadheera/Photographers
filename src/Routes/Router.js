import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../Pages/MainPage/MainPage';
// import SignUpForm from '../Pages/SignUpForm/SignUpForm';
// import SignInForm from '../Pages/SignInForm/SignInForm';

const Router = () => {
  return (
    <Routes>
      {/* Define the route for the MainPage as the root route */}
      <Route path="/" element={<MainPage />} />
      {/* Uncomment and add other routes as needed */}
      {/* <Route path="/signup" element={<SignUpForm />} />
      <Route path="/signin" element={<SignInForm />} /> */}
    </Routes>
  );
};

export default Router;
