import React from "react";

const reviewsData = [
  {
    id: 1,
    name: "Alice Johnson",
    rating: 5,
    comment: "Amazing product! Highly recommend.",
  },
  {
    id: 2,
    name: "Bob Smith",
    rating: 4,
    comment: "Very good quality, but delivery was slow.",
  },
  {
    id: 3,
    name: "Charlie Brown",
    rating: 3,
    comment: "It's okay, but I expected more.",
  },
  {
    id: 4,
    name: "Diana Prince",
    rating: 5,
    comment: "Absolutely love it! Worth every penny.",
  },
];

const Reviews = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold text-blue-700 mb-6">
        Customer Reviews
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviewsData.map((review) => (
          <div
            key={review.id}
            className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-500 text-white p-2 rounded-full mr-3">
                {review.rating}⭐
              </div>
              <h2 className="text-lg font-semibold">{review.name}</h2>
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
