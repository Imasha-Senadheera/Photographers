import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input) {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white border-2 border-blue-700 rounded-lg p-5 mt-8">
      <h2 className="text-gray-700 font-semibold text-lg mb-4">To-Do List</h2>
      <div className="mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task"
          className="p-2 border border-gray-400 rounded-md mr-2"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Add
        </button>
      </div>
      <ul className="list-none mt-4">
        {tasks.map((task, index) => (
          <li key={index} className="flex items-center py-1">
            <span className="flex-1">
              {index + 1}. {task}
            </span>
            <button
              onClick={() => deleteTask(index)}
              className="text-red-500 hover:text-red-700"
              title="Delete"
            >
              <FaTimes />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
