import React, { useState } from "react";
import Cover from "../../Assests/Cover.png";
import { FaFacebook, FaUserCircle, FaWhatsapp } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import Logo1 from "../../Assests/facebook1.png";
import Logo2 from "../../Assests/instagram1.png";
import Logo3 from "../../Assests/linkedin1.png";
import Logo from "../../Assests/logo.png";
import Logo4 from "../../Assests/black_logo.png";
import { cardsData } from "../../Constants/MockData";
import ImageCard from "../../Components/ImageCard/ImageCard";
import "./Home.css";

const Home = () => {
  const [reviewIndex, setReviewIndex] = useState(0);
  const reviews = [
    "Review 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Review 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Review 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  ];

  const handlePrevReview = () => {
    setReviewIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : reviews.length - 1
    );
  };

  const handleNextReview = () => {
    setReviewIndex((prevIndex) =>
      prevIndex < reviews.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <>
      <div className="w-full h-80 relative">
        <img src={Cover} alt="Cover" className="w-full h-full object-cover" />
        <img src={Logo} alt="Logo" className="home-logo" />
      </div>

      <div className="flex bg-slate-100">
        <div className="flex mx-[10%] gap-16 w-full min-h-screen p-10">
          <div className="w-[70%]">
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
            <div className="flex gap-5 mb-10">
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
              <ul className="text-sm mt-2 list-disc pl-5">
                <li>Joined on: 01/25/2022</li>
                <li>Jobs done: 5</li>
                <li>Experience: 2 years</li>
                <li>Price range: 80000-120000</li>
                <li>Category: Wedding, Birthdays, Party</li>
              </ul>
            </div>
            <div className="my-10 p-6 border-2 border-blue-700">
              <p className="text-xl text-blue-700 font-bold">Social Links</p>
              <div className="flex gap-5 text-4xl mt-2">
                <a href="https://facebook.com" aria-label="Facebook">
                  <FaFacebook />
                </a>
                <a href="https://whatsapp.com" aria-label="WhatsApp">
                  <FaWhatsapp />
                </a>
                <a href="https://instagram.com" aria-label="Instagram">
                  <AiFillInstagram />
                </a>
              </div>
            </div>
            <div className="my-10 p-6 border-2 border-blue-700">
              <p className="text-xl text-blue-700 font-bold">Description</p>
              <p className="text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
            <div className="relative flex justify-center">
              <div className="relative w-[400px] overflow-hidden">
                <div className="flex">
                  {reviews.map((review, index) => {
                    const [reviewerName, reviewText] = review.split(":");
                    return (
                      <div
                        key={index}
                        className={`flex-shrink-0 w-[400px] p-6 border-2 border-blue-700 ${
                          index === reviewIndex ? "block" : "hidden"
                        }`}
                      >
                        <p className="text-xl text-blue-700 font-bold text-center">
                          Customer Review
                        </p>
                        <p className="text-sm mt-2 text-center">
                          <span className="font-bold">{reviewerName}:</span>{" "}
                          {reviewText}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <button
                  onClick={handlePrevReview}
                  className="absolute top-1/2 left-[-19px] transform -translate-y-1/2 bg-blue-900 text-white rounded-full p-4 z-10"
                >
                  &lt;
                </button>
                <button
                  onClick={handleNextReview}
                  className="absolute top-1/2 right-[-19px] transform -translate-y-1/2 bg-blue-900 text-white rounded-full p-4 z-10"
                >
                  &gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-300 mx-[10%] mt-20" />
      <footer className="w-full bg-gray-100 text-black py-8 mt-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-16 mt-6 mb-10">
            <img
              src={Logo1}
              alt="Facebook Logo"
              className="w-16 h-16 object-contain"
            />
            <img
              src={Logo2}
              alt="Instagram Logo"
              className="w-16 h-16 object-contain"
            />
            <img
              src={Logo3}
              alt="LinkedIn Logo"
              className="w-16 h-16 object-contain"
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="flex gap-16 md:gap-24">
              <div>
                <h3 className="text-xl font-semibold mb-4">Explore</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/"
                      className="hover:text-blue-500 transition-colors"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="hover:text-blue-500 transition-colors"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/faqs"
                      className="hover:text-blue-500 transition-colors"
                    >
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                <ul className="space-y-2">
                  <li>
                    Email:{" "}
                    <a
                      href="mailto:grapherslk@gmail.com"
                      className="hover:text-blue-500 transition-colors"
                    >
                      grapherslk@gmail.com
                    </a>
                  </li>
                  <li>
                    Phone:{" "}
                    <a
                      href="tel:+94771234567"
                      className="hover:text-blue-500 transition-colors"
                    >
                      +94771234567
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-center mt-8 md:mt-0">
              <img
                src={Logo4}
                alt="Logo"
                className="w-24 h-24 object-contain mb-2"
              />
              <p className="text-lg font-medium">Stay Connected</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
