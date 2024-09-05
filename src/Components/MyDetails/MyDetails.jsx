import React, { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";
import Footer from "../../Components/Footer/Footer";
import "./MyDetails.css"; // Import the CSS file

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
    <div className="my-details-container">
      <div className="my-details-content">
        <h1 className="my-details-heading">My Details</h1>
        {isEditing ? (
          <div>
            <div className="mb-4">
              <label className="text-lg font-semibold">Full Name:</label>
              <input
                type="text"
                name="username"
                value={formData.username || ""}
                onChange={handleChange}
                className="my-details-input"
              />
            </div>
            <div className="mb-4">
              <label className="text-lg font-semibold">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email || ""}
                onChange={handleChange}
                className="my-details-input"
              />
            </div>
            <div className="mb-4">
              <label className="text-lg font-semibold">Phone Number:</label>
              <input
                type="text"
                name="phone"
                value={formData.phone || ""}
                onChange={handleChange}
                className="my-details-input"
              />
            </div>
            <div className="mb-4">
              <label className="text-lg font-semibold">Organization:</label>
              <input
                type="text"
                name="organizationName"
                value={formData.organizationName || ""}
                onChange={handleChange}
                className="my-details-input"
              />
            </div>
            <div className="mb-4">
              <label className="text-lg font-semibold">Experience:</label>
              <input
                type="text"
                name="experience"
                value={formData.experience || ""}
                onChange={handleChange}
                className="my-details-input"
              />
            </div>
            <div className="mb-4">
              <label className="text-lg font-semibold">Category:</label>
              <input
                type="text"
                name="category"
                value={formData.category || ""}
                onChange={handleChange}
                className="my-details-input"
              />
            </div>
            <div>
              <label className="text-lg font-semibold">Description:</label>
              <textarea
                name="description"
                value={formData.description || ""}
                onChange={handleChange}
                className="my-details-textarea"
              />
            </div>
            <div className="my-details-buttons mt-4">
              <button
                onClick={handleUpdate}
                className="my-details-update-button"
              >
                Update
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="my-details-cancel-button"
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
              className="my-details-update-button mt-4"
            >
              Edit
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MyDetails;
