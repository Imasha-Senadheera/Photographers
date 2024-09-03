import React from "react";
import Chart from "../../Components/OverviewComponents/Chart";
import TodoList from "../../Components/OverviewComponents/TodoList";
import MyCalendar from "../../Components/OverviewComponents/Calendar";
import Footer from '../Footer/Footer'; 

const OverView = () => {
  return (
    <div className="bg-slate-100 flex flex-col min-h-screen">
      <div className="flex-grow px-32 pb-32">
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

        {/* Add the new components below */}
        <Chart />
        <TodoList />
        <MyCalendar />
      </div>
      
      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default OverView;
