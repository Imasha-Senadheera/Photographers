import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaTimes } from "react-icons/fa";
import "./MyLayout.css"; // Import the CSS file for MyLayout

const MyLayout = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [date, setDate] = useState(new Date());

  const addTask = () => {
    if (input) {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="mylayout-container">
      <div className="todo-container">
        <h2 className="section-title">To-Do List</h2>
        <div className="todo-input-container">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a task"
            className="todo-input"
          />
          <button onClick={addTask} className="todo-add-button">
            Add
          </button>
        </div>
        <ul className="todo-list">
          {tasks.map((task, index) => (
            <li key={index} className="todo-list-item">
              <span className="todo-task">
                {index + 1}. {task}
              </span>
              <button
                onClick={() => deleteTask(index)}
                className="todo-delete-button"
                title="Delete"
              >
                <FaTimes />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="calendar-container">
        <h2 className="section-title">Calendar</h2>
        <Calendar onChange={onChange} value={date} />
      </div>
    </div>
  );
};

export default MyLayout;
