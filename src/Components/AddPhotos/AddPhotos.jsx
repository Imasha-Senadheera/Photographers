import React, { useState } from "react"; // Remove useEffect
import { IoIosAddCircle } from "react-icons/io"; // Import IoIosAddCircle icon
import { db } from "../../firebaseConfig"; // Import Firestore instance
import { useNavigate } from "react-router-dom";
import ImageCard from "../ImageCard/ImageCard"; // Import ImageCard component
import { cardsData } from "../../Constants/MockData"; // Import cardsData
import { doc, setDoc } from "firebase/firestore"; // Update this import

const sriLankanDistricts = [
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

const AddPhotos = () => {
  const [formData, setFormData] = useState({
    packageName: "",
    packageDescription: "",
    price: "",
    duration: "",
    category: "",
    location: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const packageRef = doc(db, "packages", formData.packageName);
      await setDoc(packageRef, formData); // Use setDoc instead of updateDoc
      console.log("Package data added to Firestore");
      navigate("/profile");
    } catch (error) {
      setError("Error adding package data: " + error.message);
      console.error("Error adding package data:", error);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-9 p-8 bg-light-blue h-screen">
      <div className="flex-1 max-h-full overflow-y-auto">
        <h1 className="text-blue-700 font-semibold text-xl mb-4">
          Package Details
        </h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Package Name
              </label>
              <input
                type="text"
                name="packageName"
                placeholder="Enter package name"
                value={formData.packageName}
                onChange={handleChange}
                className="border rounded px-4 py-2 w-full border-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Package Description
              </label>
              <textarea
                name="packageDescription"
                placeholder="Enter package description"
                value={formData.packageDescription}
                onChange={handleChange}
                className="border rounded px-4 py-2 w-full border-gray-400"
                rows="4"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price (Rs.)
              </label>
              <input
                type="number"
                name="price"
                placeholder="Enter price in Rs."
                value={formData.price}
                onChange={handleChange}
                className="border rounded px-4 py-2 w-full border-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Duration
              </label>
              <input
                type="text"
                name="duration"
                placeholder="Enter duration (e.g., hours, days)"
                value={formData.duration}
                onChange={handleChange}
                className="border rounded px-4 py-2 w-full border-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <input
                type="text"
                name="category"
                placeholder="Enter category (e.g., wedding, portrait)"
                value={formData.category}
                onChange={handleChange}
                className="border rounded px-4 py-2 w-full border-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="border rounded px-4 py-2 w-full border-gray-400"
              >
                <option value="" disabled>
                  Select a district
                </option>
                {sriLankanDistricts.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="bg-blue-900 text-white rounded-full w-32 h-10 text-sm"
            >
              Save
            </button>
          </div>
        </form>

        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>

      {/* Add Photos Section */}
      <div className="flex-1 max-h-full overflow-y-auto">
        <p className="text-blue-700 font-semibold text-xl mb-4">Add Photos</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
          {cardsData.map((item, index) => (
            <div
              key={item.id}
              className="relative w-full h-24 overflow-hidden rounded-lg border border-gray-300"
            >
              <ImageCard
                imageUrl={item.imageUrl}
                add={item.add}
                className="object-cover w-full h-full"
              />
              {/* Add the icon to the last photo */}
              {index === cardsData.length - 1 && (
                <div className="absolute inset-0 flex justify-center items-center opacity-75 bg-white">
                  <IoIosAddCircle className="text-3xl text-gray-500" />
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="text-blue-700 font-semibold text-xl mt-6 mb-4">
          Add Cover Photo
        </p>
        <div className="flex justify-center items-center w-full h-32 bg-white border border-gray-300 rounded cursor-pointer">
          <div className="flex justify-center items-center opacity-75">
            <IoIosAddCircle className="text-3xl text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPhotos;
