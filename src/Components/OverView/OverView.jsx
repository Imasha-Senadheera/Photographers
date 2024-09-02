import React from "react";

const OverView = () => {
  return (
    <div className="bg-slate-100 px-32">
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white border-2 border-blue-700 rounded-lg p-5">
          <p className="text-gray-500 font-semibold text-center">
            Uploaded Photos
          </p>
          <p className="text-black font-semibold text-2xl my-3 text-center">
            60
          </p>
        </div>
        <div className="bg-white border-2 border-blue-700 rounded-lg p-5">
          <p className="text-gray-500 font-semibold text-center">Views</p>
          <p className="text-black font-semibold text-2xl my-3 text-center">
            16
          </p>
        </div>
        <div className="bg-white border-2 border-blue-700 rounded-lg p-5">
          <p className="text-gray-500 font-semibold text-center">Likes</p>
          <p className="text-black font-semibold text-2xl my-3 text-center">
            43
          </p>
        </div>
        <div className="bg-white border-2 border-blue-700 rounded-lg p-5">
          <p className="text-gray-500 font-semibold text-center">Ratings</p>
          <p className="text-black font-semibold text-2xl my-3 text-center">
            64
          </p>
        </div>
      </div>

      {/* Additional sections like Trends, Tasks, Calendar etc., can be added below */}
      {/* For example, you could add a trends graph and tasks list here */}
    </div>
  );
};

export default OverView;
