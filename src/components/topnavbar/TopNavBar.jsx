import React from "react";

const TopNavBar = () => {
  return (
    <nav className="bg-blue-600 p-3 flex items-center justify-between w-full">
      <div className="text-white text-lg font-semibold">BUDGET BUDDY</div>
      <div className="flex items-center space-x-4">
        <button className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800">
          Button 1
        </button>
        <button className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800">
          Button 2
        </button>
      </div>
    </nav>
  );
};

export default TopNavBar;
