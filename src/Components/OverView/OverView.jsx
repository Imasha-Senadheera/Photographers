import React from "react";
import Chart from "../../Components/OverviewComponents/Chart";
import TodoList from "../../Components/OverviewComponents/TodoList";
import MyCalendar from "../../Components/OverviewComponents/Calendar";
import Footer from "../Footer/Footer";
import "./OverView.css"; // Import the CSS file

const OverView = () => {
  return (
    <div className="overview-container">
      <div className="content-container">
        <div className="stats-grid">
          <div className="stats-box">
            <p className="stats-label">Uploaded Photos</p>
            <p className="stats-number">60</p>
          </div>
          <div className="stats-box">
            <p className="stats-label">Views</p>
            <p className="stats-number">16</p>
          </div>
          <div className="stats-box">
            <p className="stats-label">Likes</p>
            <p className="stats-number">43</p>
          </div>
          <div className="stats-box">
            <p className="stats-label">Ratings</p>
            <p className="stats-number">64</p>
          </div>
        </div>

        {/* Additional Components */}
        <Chart />
        <TodoList />
        <MyCalendar />
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default OverView;
