import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { db, storage, auth } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import ImageCard from "../ImageCard/ImageCard";
import {
  doc,
  setDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "./AddPhotos.css";

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
  const [samplePhotos, setSamplePhotos] = useState([]);
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e, type) => {
    if (type === "sample") {
      const files = Array.from(e.target.files);
      setSamplePhotos((prevPhotos) => [...prevPhotos, ...files]);
    } else if (type === "cover") {
      setCoverPhoto(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true
    try {
      const q = query(
        collection(db, "Users"),
        where("email", "==", auth.currentUser.email)
      );
      const docs = await getDocs(q);
      const results = docs.docs[0]; // Get the first matching document
      console.log("Document data:", results.data());
      const orgName = results.data().organizationName;

      // Handle cover photo upload
      let coverPhotoUrl = "";
      if (coverPhoto) {
        const coverPhotoRef = ref(storage, `coverPhotos/${coverPhoto.name}`);
        await uploadBytes(coverPhotoRef, coverPhoto);
        coverPhotoUrl = await getDownloadURL(coverPhotoRef);
        console.log("Cover Photo URL:", coverPhotoUrl);
      }

      // Handle sample photos upload
      const samplePhotoUrls = [];
      for (let photo of samplePhotos) {
        const photoRef = ref(storage, `samplePhotos/${photo.name}`);
        await uploadBytes(photoRef, photo);
        const photoUrl = await getDownloadURL(photoRef);
        samplePhotoUrls.push(photoUrl);
        console.log("Sample Photo URL:", photoUrl);
      }

      // Save package data to Firestore
      const packageRef = doc(db, "packages", formData.packageName);
      await setDoc(packageRef, {
        ...formData,
        organizationName: orgName,
        coverPhoto: coverPhotoUrl,
        samplePhotos: samplePhotoUrls,
      });

      console.log("Package data added to Firestore");
      navigate("/"); // Redirect to the homepage
    } catch (error) {
      setError("Error adding package data: " + error.message);
      console.error("Error adding package data:", error);
    } finally {
      setLoading(false); // Set loading to false
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
        {loading && (
          <div className="flex justify-center items-center mt-4">
            <p className="text-blue-700">Uploading package information...</p>
            <div className="ml-2 border-t-4 border-blue-900 border-solid rounded-full w-6 h-6 animate-spin"></div>{" "}
            {/* Simple spinner */}
          </div>
        )}
      </div>

      <div className="flex-1 max-h-full overflow-y-auto">
        <p className="text-blue-700 font-semibold text-xl mb-4">
          Add Sample Photos
        </p>
        <div className="grid grid-cols-3 gap-4 mb-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <label
              key={index}
              className="flex justify-center items-center h-32 bg-white border border-gray-300 rounded cursor-pointer relative overflow-hidden"
            >
              {samplePhotos[index] ? (
                <ImageCard
                  imageUrl={URL.createObjectURL(samplePhotos[index])}
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="flex justify-center items-center opacity-75">
                  <IoIosAddCircle className="text-3xl text-gray-500" />
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, "sample")}
                className="hidden"
              />
            </label>
          ))}
        </div>
        <p className="text-blue-700 font-semibold text-xl mt-6 mb-4">
          Add Cover Photo
        </p>
        <label className="flex justify-center items-center w-full h-12 bg-white border border-gray-300 rounded cursor-pointer relative overflow-hidden">
          {coverPhoto ? (
            <ImageCard
              imageUrl={URL.createObjectURL(coverPhoto)}
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="flex justify-center items-center opacity-75 w-full h-full">
              <IoIosAddCircle className="text-xl text-gray-500" />{" "}
              {/* Reduced icon size */}
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, "cover")}
            className="hidden"
          />
        </label>
      </div>
    </div>
  );
};

export default AddPhotos;
