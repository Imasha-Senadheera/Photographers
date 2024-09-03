import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { cardsData } from "../../Constants/MockData";
import ImageCard from "../ImageCard/ImageCard";
import { IoIosAddCircle } from "react-icons/io";
// import Footer from '../Footer/Footer'; 

const AddPhotos = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-9 p-8 h-screen">
      {/* Profile Form */}
      <div className="flex-1 max-h-full overflow-y-auto">
        <p className="text-blue-700 font-semibold text-xl mb-4">Profile</p>
        <form className="space-y-6">
          <div className="space-y-4">
            <div className="flex gap-6">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="border rounded px-4 py-2 w-full"
                />
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="border rounded px-4 py-2 w-full"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Organization Name
              </label>
              <input
                type="text"
                placeholder="Enter your organization name"
                className="border rounded px-4 py-2 w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="border rounded px-4 py-2 w-full"
              />
            </div>

            {/* <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Change Password
              </label>
              <input
                type="password"
                placeholder="Enter a new password"
                className="border rounded px-4 py-2 w-full"
              />
            </div> */}

            <div className="flex gap-6">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Add Profile Photo
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="fileInput"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={(e) => {
                      const fileName = e.target.files[0]?.name || "";
                      document.getElementById("fileInputText").value = fileName;
                    }}
                  />
                  <input
                    type="text"
                    id="fileInputText"
                    placeholder="Select a file"
                    className="border rounded px-4 py-2 w-full cursor-pointer"
                    readOnly
                    onClick={() => document.getElementById("fileInput").click()}
                  />
                </div>
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Experience
                </label>
                <input
                  type="text"
                  placeholder="Enter your experience"
                  className="border rounded px-4 py-2 w-full"
                />
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <input
                  type="text"
                  placeholder="Enter your category"
                  className="border rounded px-4 py-2 w-full"
                />
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your contact number"
                  className="border rounded px-4 py-2 w-full"
                />
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Min Price
                </label>
                <input
                  type="number"
                  placeholder="Enter the minimum price"
                  className="border rounded px-4 py-2 w-full"
                />
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Max Price
                </label>
                <input
                  type="number"
                  placeholder="Enter the maximum price"
                  className="border rounded px-4 py-2 w-full"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                placeholder="Enter a description"
                className="border rounded px-4 py-2 w-full"
                rows="4"
              ></textarea>
            </div>
          </div>

          <div className="flex gap-4 mt-4 justify-center flex-wrap">
            <button className="bg-white rounded-full p-2 flex items-center gap-2 text-blue-700 border border-gray-300 hover:bg-gray-100 text-sm">
              <FaFacebook /> Connected
            </button>
            <button className="bg-white rounded-full p-2 flex items-center gap-2 text-green-500 border border-gray-300 hover:bg-gray-100 text-sm">
              <FaWhatsapp /> Connect
            </button>
            <button className="bg-white rounded-full p-2 flex items-center gap-2 text-pink-500 border border-gray-300 hover:bg-gray-100 text-sm">
              <AiFillInstagram /> Connect
            </button>
          </div>

          <div className="flex justify-center mt-4">
            <button className="bg-blue-900 text-white rounded-full w-32 h-10 text-sm">
              Save
            </button>
          </div>
          
        </form>

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
