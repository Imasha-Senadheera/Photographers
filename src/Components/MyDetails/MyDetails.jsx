import React, { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";
import Footer from "../../Components/Footer/Footer";

const MyDetails = () => {
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const userDoc = doc(db, "Users", user.uid);
          const userSnapshot = await getDoc(userDoc);
          if (userSnapshot.exists()) {
            setUserData(userSnapshot.data());
            setFormData(userSnapshot.data()); 
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        const userDoc = doc(db, "Users", user.uid);
        await updateDoc(userDoc, formData);
        setUserData(formData); // Update local state
        setIsEditing(false); // Exit edit mode
      }
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  if (!userData) return <p>Loading...</p>;

  return (
    <div className="p-8 bg-light-blue min-h-screen flex flex-col">
      <div className="flex-grow">
        <h1 className="text-blue-700 font-semibold text-3xl mb-6">
          My Details
        </h1>
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          {isEditing ? (
            <div>
              <div className="mb-4">
                <label className="text-lg font-semibold">Full Name:</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username || ""}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label className="text-lg font-semibold">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email || ""}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label className="text-lg font-semibold">Phone Number:</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone || ""}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label className="text-lg font-semibold">Organization:</label>
                <input
                  type="text"
                  name="organizationName"
                  value={formData.organizationName || ""}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label className="text-lg font-semibold">Experience:</label>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience || ""}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label className="text-lg font-semibold">Category:</label>
                <input
                  type="text"
                  name="category"
                  value={formData.category || ""}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>
              <div>
                <label className="text-lg font-semibold">Description:</label>
                <textarea
                  name="description"
                  value={formData.description || ""}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>
              <div className="mt-4">
                <button
                  onClick={handleUpdate}
                  className="bg-blue-500 text-white p-2 rounded mr-2"
                >
                  Update
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-500 text-white p-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-4">
                <p className="text-lg font-semibold">Full Name:</p>
                <p className="text-gray-700">{userData.username}</p>
              </div>
              <div className="mb-4">
                <p className="text-lg font-semibold">Email:</p>
                <p className="text-gray-700">{userData.email}</p>
              </div>
              <div className="mb-4">
                <p className="text-lg font-semibold">Phone Number:</p>
                <p className="text-gray-700">{userData.phone}</p>
              </div>
              <div className="mb-4">
                <p className="text-lg font-semibold">Organization:</p>
                <p className="text-gray-700">{userData.organizationName}</p>
              </div>
              <div className="mb-4">
                <p className="text-lg font-semibold">Experience:</p>
                <p className="text-gray-700">{userData.experience}</p>
              </div>
              <div className="mb-4">
                <p className="text-lg font-semibold">Category:</p>
                <p className="text-gray-700">{userData.category}</p>
              </div>
              <div>
                <p className="text-lg font-semibold">Description:</p>
                <p className="text-gray-700">{userData.description}</p>
              </div>
              <button
                onClick={handleEditClick}
                className="bg-blue-500 text-white p-2 rounded mt-4"
              >
                Edit
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyDetails;
