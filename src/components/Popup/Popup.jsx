import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ sortPopup, setSortPopup, setSortOption }) => {
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    setSortPopup(false); // Close the popup after selecting
  };

  return (
    <>
      {sortPopup && (
        <div className="popup">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
              <div className="flex items-center justify-between">
                <div>
                  <h1>Sort the Products</h1>
                </div>
                <div>
                  <IoCloseOutline
                    className="text-2xl cursor-pointer "
                    onClick={() => setSortPopup(false)}
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="relative block cursor-pointer pl-4 mb-3">
                  <input
                    onChange={handleSortChange}
                    type="radio"
                    value="lowSort"
                    name="sort"
                    className="absolute top-1/3 cursor-pointer"
                  />
                  <p className="w-4/5 text-center">Price (Low to High)</p>
                </label>
                <label className="relative block cursor-pointer pl-4 mb-3">
                  <input
                    onChange={handleSortChange}
                    type="radio"
                    value="highSort"
                    name="sort"
                    className="absolute top-1/3 cursor-pointer"
                  />
                  <p className="w-4/5 text-center">Price (High to Low)</p>
                </label>
                <label className="relative block cursor-pointer pl-4 mb-3">
                  <input
                    onChange={handleSortChange}
                    type="radio"
                    value="ratingSort"
                    name="sort"
                    className="absolute top-1/3 cursor-pointer"
                  />
                  <p className="w-5/12 text-center">Rating</p>
                </label>
                <div className="flex justify-center">
                  <button
                    onClick={() => setSortPopup(false)}
                    className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full"
                  >
                    Sort
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
