import React from "react";
import Cover from "../../Assests/Cover.png";
import { FaFacebook, FaUserCircle, FaWhatsapp } from "react-icons/fa";
import { cardsData } from "../../Constants/MockData";
import ImageCard from "../../Components/ImageCard/ImageCard";
import { AiFillInstagram } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import Logo1 from "../../Assests/facebook1.png";
import Logo2 from "../../Assests/instagram1.png";
import Logo3 from "../../Assests/linkedin1.png";
import Logo from "../../Assests/black_logo.png";

const Home = () => {
  return (
    <>
      <div className="w-full h-80">
        <img src={Cover} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="flex bg-slate-100">
        <div className="flex mx-[10%] gap-16 w-full min-h-screen p-10">
          <div className="w-[70%]">
            {/* Added margin-bottom here */}
            <div className="flex items-center gap-5 pb-5 mb-8">
              <FaUserCircle className="text-6xl" />
              <div>
                <p className="text-2xl font-semibold">Pasindu Maneesha</p>
                <p className="text-sm">Organization Name</p>
                <p className="text-sm">Location</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-20">
              {cardsData.map((item) => (
                <ImageCard
                  key={item.id}
                  imageUrl={item.imageUrl}
                  add={item.add}
                />
              ))}
            </div>
          </div>
          <div className="w-[30%] font-semibold">
            <div className="flex gap-5">
              <button className="flex gap-3 items-center justify-center bg-white text-black rounded w-full h-10 border-2 border-blue-700">
                <CiHeart className="text-red-400" />
                Like
              </button>
              <button className="bg-blue-900 text-white rounded-lg w-full h-10">
                Add Review
              </button>
            </div>
            <div className="my-10 p-6 border-2 border-blue-700">
              <p className="text-xl text-blue-700 font-bold">About</p>
              <div className="text-sm mt-2">
                <li>Joined on: 01/25/2022</li>
                <li>Jobs done: 5</li>
                <li>Experience: 2 years</li>
                <li>Price range: 80000-120000</li>
                <li>Category: Wedding, Birthdays, Party</li>
              </div>
            </div>
            <div className="my-10 p-6 border-2 border-blue-700">
              <p className="text-xl text-blue-700 font-bold">Social Links</p>
              <div className="flex gap-5 text-4xl mt-2">
                <FaFacebook />
                <FaWhatsapp />
                <AiFillInstagram />
              </div>
            </div>
            <div className="my-10 p-6 border-2 border-blue-700">
              <p className="text-xl text-blue-700 font-bold">Description</p>
              <div className="flex gap-5 mt-2 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="border-gray-300 mx-[10%] mt-20" />

      {/* Footer Section */}
      <footer className="w-full bg-gray-100 text-black py-6 mt-10">
        <div className="mx-[30%]">
          {/* Logos Section */}
          <div className="flex justify-center gap-10 mt-6 mb-10">
            <img
              src={Logo1}
              alt="Logo 1"
              className="w-10 h-10 object-contain"
            />
            <img
              src={Logo2}
              alt="Logo 2"
              className="w-10 h-10 object-contain"
            />
            <img
              src={Logo3}
              alt="Logo 3"
              className="w-10 h-10 object-contain"
            />
          </div>

          {/* Explore and Contact Sections */}
          <div className="flex justify-between items-center">
            <div className="flex gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">Explore</h3>
                <ul className="space-y-1">
                  <li>Home</li>
                  <li>About Us</li>
                  <li>FAQs</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                <ul className="space-y-1">
                  <li>Email: example@example.com</li>
                  <li>Phone: 0771234567</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img src={Logo} alt="Logo" className="w-14 h-14 object-contain" />
              <p className="mt-2">Stay Connected</p>
            </div>
          </div>
        </div>

        <hr className="border-gray-300 mt-6" />
        <p className="text-center text-sm text-gray-600 mt-4">
          © 2024 Your Company Name. All rights reserved.
        </p>
        <p className="text-center text-sm text-gray-600">
          Terms and Conditions | Privacy Policy
        </p>
      </footer>
    </>
  );
};

export default Home;
