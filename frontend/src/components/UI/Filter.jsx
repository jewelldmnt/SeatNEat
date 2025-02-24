import React, { useState } from "react";

const Filter = () => {
  const [sortBy, setSortBy] = useState("");
  const [price, setPrice] = useState(50);
  const [discount, setDiscount] = useState("");
  const [diningTime, setDiningTime] = useState("");

  const handleClearFilters = () => {
    setSortBy("");
    setPrice(50);
    setDiscount("");
    setDiningTime("");
  };

  return (
    <div
      className="w-1/5 p-4 bg-white h-auto rounded-md border border-neutral-300 shadow-md"
      style={{ boxShadow: "1px 0px 4px 1px rgba(0, 0, 0, 0.25)" }}
    >
      <div className="flex flex-col gap-6">
        {/* Filters Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-base font-semibold">Filters</h2>
          <button
            onClick={handleClearFilters}
            className="text-sm text-neutral-500 hover:underline font-semibold"
          >
            Clear All
          </button>
        </div>

        {/* Sort By Section */}
        <div>
          <h3 className="text-sm font-semibold mb-2">Sort by</h3>
          {["Best Rated", "Most Popular", "Newest"].map((option) => (
            <label
              key={option}
              className="block mb-2 text-xs text-black font-medium"
            >
              <input
                type="radio"
                name="sortBy"
                value={option}
                checked={sortBy === option}
                onChange={(e) => setSortBy(e.target.value)}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>

        {/* Price Slider */}
        <div>
          <h3 className="text-sm font-semibold mb-2">Price</h3>
          <input
            type="range"
            min="0"
            max="100"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full"
          />
          <p className="text-xs text-black font-medium mt-1">Up to {price} Php</p>
        </div>

        {/* Discounts Section */}
        <div>
          <h3 className="text-sm font-semibold mb-2">Discounts</h3>
          {[
            "Solo",
            "Couple",
            "Small Group",
            "Medium Group",
            "Large Group",
            "Party",
          ].map((option) => (
            <label
              key={option}
              className="block mb-2 text-xs text-black font-medium"
            >
              <input
                type="radio"
                name="discount"
                value={option}
                checked={discount === option}
                onChange={(e) => setDiscount(e.target.value)}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>

        {/* Dining Time Preferences Section */}
        <div>
          <h3 className="text-sm font-semibold mb-2">
            Dining Time Preferences
          </h3>
          {[
            "Breakfast",
            "Brunch",
            "Lunch",
            "Afternoon",
            "Dinner",
            "Late Night",
          ].map((option) => (
            <label
              key={option}
              className="block mb-2 text-xs text-black font-medium"
            >
              <input
                type="radio"
                name="diningTime"
                value={option}
                checked={diningTime === option}
                onChange={(e) => setDiningTime(e.target.value)}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
