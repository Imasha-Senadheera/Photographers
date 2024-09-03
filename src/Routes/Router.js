import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Components/Layout/Layout';
import Home from '../Pages/Home/Home';
import Dashboard from '../Pages/Dashboard/Dashboard';
// import SignUpForm from '../Pages/SignUpForm/SignUpForm';

const Router = () => {
  return (
    <Routes>
      {/* Uncomment this section to include layout and other pages */}
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Route>
      
      {/* Only render SignUpForm */}
      {/* <Route path="/" element={<SignUpForm />} /> */}
    </Routes>
  );
};

export default Router;
