import React, { useState } from 'react';
import Scene from './Scene';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    place: '',
    mapLocation: '',
    description: '',
    pictures: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, pictures: e.target.files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic
    console.log(formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
      <Scene />
      <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-lg mt-6">
        <h2 className="text-3xl font-bold text-center text-blue-gray-900 mb-4">Register Sales Event</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Event Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Place</label>
            <input
              type="text"
              name="place"
              value={formData.place}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Map Location</label>
            <input
              type="text"
              name="mapLocation"
              value={formData.mapLocation}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Event Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Upload Event Pictures</label>
            <input
              type="file"
              name="pictures"
              multiple
              onChange={handleFileChange}
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            />
          </div>
          <button type="submit" className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700">
            Register Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
