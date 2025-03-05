import React from "react";
import { BsSliders } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import Divider from "@mui/material/Divider";

const Search = () => {
  return (
    <section
      className="container my-10 relative w-full h-[31.5rem] bg-cover bg-center"
      style={{ backgroundImage: "url('')" }}
    >
      <div className="bg-[#D9D9D9] absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-black text-[2.5rem] font-semibold mb-5">
          Your Table, Ready When You Are
        </h1>
        <p className="text-black max-w-4xl mb-12">
          Say goodbye to long lines and last-minute disappointments. With
          SeatN’Eat, easily find and book the best restaurants in town, whether
          you're craving a cozy dinner, a quick brunch, or a fine dining
          experience.
        </p>
        <div className="flex w-full max-w-2xl bg-white overflow-hidden shadow-md">
          <div className="flex items-center px-4 text-gray-500">
            <FiSearch className="w-5 h-5" />
          </div>
          <input
            type="text"
            placeholder="Search for restaurants..."
            className="w-full py-3 text-gray-700 focus:outline-none"
          />
          <Divider orientation="vertical" variant="middle" flexItem />
          <button className="p-3 hover:text-gray-300 text-gray-600 flex items-center justify-center">
            <BsSliders className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Search;
