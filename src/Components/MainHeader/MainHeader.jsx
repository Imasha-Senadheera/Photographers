import React, { useState } from "react";
import "./MainHeader.css";

const districts = [
  "Colombo",
  "Gampaha",
  "Kalutara",
  "Kandy",
  "Matale",
  "Nuwara Eliya",
  "Galle",
  "Matara",
  "Hambantota",
  "Jaffna",
  "Kilinochchi",
  "Mannar",
  "Vavuniya",
  "Mullaitivu",
  "Batticaloa",
  "Ampara",
  "Trincomalee",
  "Kurunegala",
  "Puttalam",
  "Anuradhapura",
  "Polonnaruwa",
  "Badulla",
  "Moneragala",
  "Ratnapura",
  "Kegalle",
];

const priceRanges = [
  "Rs 5000 - Rs 10000",
  "Rs 10000 - Rs 20000",
  "Rs 20000 - Rs 50000",
  "Rs 50000 - Rs 100000",
];

const MainHeader = ({ onSearch }) => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const handleSearch = () => {
    onSearch({ keyword, location, priceRange });
  };

  return (
    <header className="mheader">
      <h1>CELEBRATE YOUR STORY THROUGH PHOTOGRAPHY</h1>
      <p>
        It's simple and it's free. Connect with local photographers
        around Sri Lanka. So what are you
        waiting for? Let's find a photographer!
      </p>
      <div className="msearch-bar">
        <input
          type="text"
          placeholder="Type a keyword..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <select value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="">Location</option>
          {districts.map((district, index) => (
            <option key={index} value={district}>
              {district}
            </option>
          ))}
        </select>
        <select
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        >
          <option value="">Price range</option>
          {priceRanges.map((range, index) => (
            <option key={index} value={range}>
              {range}
            </option>
          ))}
        </select>
        <button onClick={handleSearch}>Search</button>
      </div>
    </header>
  );
};

export default MainHeader;
