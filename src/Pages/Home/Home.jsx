import React, { useState } from "react";
import Cover from "../../Assests/Cover.png";
import { FaFacebook, FaUserCircle, FaWhatsapp } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import Logo from "../../Assests/logo.png";
import { cardsData } from "../../Constants/MockData";
import ImageCard from "../../Components/ImageCard/ImageCard";
import "./Home.css";

const Home = () => {
  const [reviewIndex, setReviewIndex] = useState(0);
  const [reviews, setReviews] = useState([
    "Review 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Review 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Review 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  ]);
  const [newReview, setNewReview] = useState("");
  const [liked, setLiked] = useState(false);

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

  const handleAddReview = () => {
    if (newReview.trim()) {
      setReviews([...reviews, `Review ${reviews.length + 1}: ${newReview}`]);
      setNewReview(""); // Clear the input field
    }
  };

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <>
      <div className="w-full h-80 relative bg-light-blue">
        <img src={Cover} alt="Cover" className="w-full h-full object-cover" />
        <img src={Logo} alt="Logo" className="home-logo" />
      </div>

      <div className="flex bg-light-blue">
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
              <button
                onClick={handleLike}
                className={`flex gap-3 items-center justify-center bg-white text-black rounded w-full h-10 border-2 ${
                  liked ? "border-red-400" : "border-blue-700"
                }`}
              >
                <CiHeart
                  className={`text-red-400 ${liked ? "text-red-500" : ""}`}
                />
                {liked ? "Liked" : "Like"}
              </button>
              <button
                className="bg-blue-900 text-white rounded-lg w-full h-10"
                data-bs-toggle="modal"
                data-bs-target="#reviewModal"
              >
                Add Review
              </button>
            </div>
            <div className="my-10 p-6 border-2 border-blue-700 bg-white">
              <p className="text-xl text-blue-700 font-bold">About</p>
              <ul className="text-sm mt-2 list-disc pl-5">
                <li>Joined on: 01/25/2022</li>
                <li>Jobs done: 5</li>
                <li>Experience: 2 years</li>
                <li>Price range: 80000-120000</li>
                <li>Category: Wedding, Birthdays, Party</li>
              </ul>
            </div>
            <div className="my-10 p-6 border-2 border-blue-700 bg-white">
              <p className="text-xl text-blue-700 font-bold">Social Links</p>
              <div className="flex gap-5 text-4xl mt-2 text-[#003366]">
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

            <div className="my-10 p-6 border-2 border-blue-700 bg-white">
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
                        } bg-white`}
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

      <hr className="border-white-300 mx-[10%] mt-14" />

      {/* Review Modal */}
      <div
        className="modal fade"
        id="reviewModal"
        tabIndex="-1"
        aria-labelledby="reviewModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="reviewModalLabel">
                Add a Review
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                value={newReview}
                onChange={(e) => setNewReview(e.target.value)}
                className="form-control"
                placeholder="Enter your review"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleAddReview}
                data-bs-dismiss="modal"
              >
                Add Review
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer className="w-full bg-light-blue text-black py-8 mt-10">
        <div className="container mx-auto px-4">
          <hr className="border-blue-300 mt-6 mb-4" />
          <p className="text-center text-sm text-black mb-2">
            © 2024 Group 09 - BIT 03 - Final Project. All rights
          </p>
          <p className="text-center text-sm text-black">
            <a href="/terms" className="hover:text-blue-700 transition-colors">
              Terms and Conditions
            </a>{" "}
            |
            <a
              href="/privacy"
              className="hover:text-blue-700 transition-colors"
            >
              {" "}
              Privacy Policy
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Home;
