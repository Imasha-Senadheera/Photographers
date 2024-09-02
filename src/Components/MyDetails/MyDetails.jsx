import React from 'react';

const MyDetails = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-blue-700 font-semibold text-3xl mb-6">My Details</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
        <div className="mb-4">
          <p className="text-lg font-semibold">Full Name:</p>
          <p className="text-gray-700">John Doe</p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-semibold">Email:</p>
          <p className="text-gray-700">john.doe@example.com</p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-semibold">Organization:</p>
          <p className="text-gray-700">Example Corp</p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-semibold">Contact Number:</p>
          <p className="text-gray-700">+123 456 7890</p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-semibold">Experience:</p>
          <p className="text-gray-700">5 years in web development</p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-semibold">Category:</p>
          <p className="text-gray-700">Web Developer</p>
        </div>
        <div>
          <p className="text-lg font-semibold">Description:</p>
          <p className="text-gray-700">
            Experienced web developer with a passion for creating beautiful and functional websites. Adept at working with various technologies and frameworks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyDetails;
