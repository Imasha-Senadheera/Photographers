import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUpForm from '../Pages/SignUpForm/SignUpForm';
import SignInForm from '../Pages/SignInForm/SignInForm';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<SignInForm />} />
      <Route path="/signup" element={<SignUpForm />} />
      {/* Add other routes as needed */}
    </Routes>
  );
};

export default Router;
