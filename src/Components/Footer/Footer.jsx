import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 text-black py-6 mt-10">
      <div className="container mx-auto px-4">
        <hr className="border-gray-300 mt-6 mb-4" />
        <p className="text-center text-sm text-gray-600 mb-2">© 2024 Group 09 - BIT 03 - Final Project. All rights reserved.</p>
        <p className="text-center text-sm text-gray-600">
          <a href="/terms" className="hover:text-blue-500 transition-colors">Terms and Conditions</a> | 
          <a href="/privacy" className="hover:text-blue-500 transition-colors"> Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
