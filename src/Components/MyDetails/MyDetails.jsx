import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";
import Footer from "../../Components/Footer/Footer";

const MyDetails = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const userDoc = doc(db, "Users", user.uid);
          const userSnapshot = await getDoc(userDoc);
          if (userSnapshot.exists()) {
            setUserData(userSnapshot.data());
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  if (!userData) return <p>Loading...</p>;

  return (
    <div className="p-8 bg-light-blue min-h-screen flex flex-col">
      <div className="flex-grow">
        <h1 className="text-blue-700 font-semibold text-3xl mb-6">
          My Details
        </h1>
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="mb-4">
            <p className="text-lg font-semibold">Full Name:</p>
            <p className="text-gray-700">{`${userData.firstName} ${userData.lastName}`}</p>
          </div>
          <div className="mb-4">
            <p className="text-lg font-semibold">Email:</p>
            <p className="text-gray-700">{userData.email}</p>
          </div>
          <div className="mb-4">
            <p className="text-lg font-semibold">Organization:</p>
            <p className="text-gray-700">{userData.organizationName}</p>
          </div>
          <div className="mb-4">
            <p className="text-lg font-semibold">Contact Number:</p>
            <p className="text-gray-700">{userData.contactNumber}</p>
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyDetails;
