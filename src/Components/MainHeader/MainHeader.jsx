import React from "react";
import "./MainHeader.css";

const districts = [
  "Colombo",
  "Galle",
  "Kandy",
  "Jaffna",
  "Anuradhapura",
  "Batticaloa",
  "Matara",
  "Kurunegala",
  "Nuwara Eliya",
  "Vavuniya",
  "Trincomalee",
  // Add more districts as needed
];

const MainHeader = () => {
  return (
    <header className="header">
      <h1>CELEBRATE YOUR STORY THROUGH PHOTOGRAPHY</h1>
      <p>
        It's simple and it's free. Connect with hand-picked, local photographers
        around Sri Lanka for fun, hassle-free photo shoots. So what are you
        waiting for? Let's find a photographer!
      </p>
      <div className="search-bar">
        <input type="text" placeholder="Type a keyword..." />
        <select>
          <option value="">Location</option>
          {districts.map((district, index) => (
            <option key={index} value={district}>
              {district}
            </option>
          ))}
        </select>
        <select>
          <option value="">Price range</option>
          {/* Add Sri Lankan Rupee price ranges here */}
          <option value="Rs 5,000 - Rs 10,000">Rs 5,000 - Rs 10,000</option>
          <option value="Rs 10,000 - Rs 20,000">Rs 10,000 - Rs 20,000</option>
          <option value="Rs 20,000 - Rs 50,000">Rs 20,000 - Rs 50,000</option>
          <option value="Rs 50,000 - Rs 100,000">Rs 50,000 - Rs 100,000</option>
        </select>
        <button>Search</button>
      </div>
    </header>
  );
};

export default MainHeader;
