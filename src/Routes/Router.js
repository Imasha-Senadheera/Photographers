import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Components/Layout/Layout';
import Home from '../Pages/Home/Home';
import Dashboard from '../Pages/Dashboard/Dashboard';
// Import other components/pages if needed

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        {/* Add more routes here if needed */}
      </Route>
    </Routes>
  );
};

export default Router;
