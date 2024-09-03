import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", views: 400, likes: 240 },
  { name: "Feb", views: 300, likes: 139 },
  { name: "Mar", views: 200, likes: 980 },
  { name: "Apr", views: 278, likes: 390 },
];

const Chart = () => {
  return (
    <div className="bg-white border-2 border-blue-700 rounded-lg p-5 mt-8">
      <h2 className="text-gray-700 font-semibold text-lg mb-4">Trends</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="views" stroke="#8884d8" />
          <Line type="monotone" dataKey="likes" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
