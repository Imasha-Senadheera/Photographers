import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="bg-white border-2 border-blue-700 rounded-lg p-5 mt-8">
      <h2 className="text-gray-700 font-semibold text-lg mb-4">Calendar</h2>
      <Calendar onChange={onChange} value={date} />
    </div>
  );
};

export default MyCalendar;
