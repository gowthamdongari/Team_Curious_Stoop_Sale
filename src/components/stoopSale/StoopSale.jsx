import React from "react";
import { useState } from "react";

const StoopSale = () => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    address: "",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
    images: null,
  });
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6">Stoop Sale Form</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Title for Stoop Sale</label>
          <input
            type="text"
            name="title"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Address</label>
          <textarea
            name="address"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Start Date and Time</label>
          <div className="flex space-x-2">
            <input
              type="date"
              name="startDate"
              className="w-1/2 p-2 border border-gray-300 rounded mt-1"
              onChange={handleChange}
            />
            <input
              type="time"
              name="startTime"
              className="w-1/2 p-2 border border-gray-300 rounded mt-1"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">End Date and Time</label>
          <div className="flex space-x-2">
            <input
              type="date"
              name="endDate"
              className="w-1/2 p-2 border border-gray-300 rounded mt-1"
              onChange={handleChange}
            />
            <input
              type="time"
              name="endTime"
              className="w-1/2 p-2 border border-gray-300 rounded mt-1"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Upload Images</label>
          <input
            type="file"
            name="images"
            multiple
            className="w-full p-2 border border-gray-300 rounded mt-1"
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default StoopSale;
