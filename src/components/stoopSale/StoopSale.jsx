import React from "react";
import { useState } from "react";
import { db, storage } from "../../firebase";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const imageUrls = await Promise.all(
        Array.from(formData.images).map(async (image) => {
          const imageRef = ref(storage, `images/${image.name}`);
          await uploadBytes(imageRef, image);
          const downloadURL = await getDownloadURL(imageRef);
          return downloadURL;
        })
      );

      // Log data to be sent to Firestore
      const dataToSend = {
        name: formData.name,
        title: formData.title,
        address: formData.address,
        startDate: new Date(`${formData.startDate}T${formData.startTime}`),
        endDate: new Date(`${formData.endDate}T${formData.endTime}`),
        images: imageUrls,
      };
      console.log("Data to send to Firestore:", dataToSend);

      // Save form data to Firestore
      await addDoc(collection(db, "stoop_sales"), dataToSend);

      console.log("Document successfully written!");
      alert("Data submitted successfully!");
    } catch (error) {
      console.log(error, "stooperror");
    }
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
