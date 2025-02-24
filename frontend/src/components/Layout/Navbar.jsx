import React from "react";
import Button from "../UI/Button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[4rem] w-full bg-primary shadow-md">
      <div className="container flex justify-between items-center w-ful h-full">
        {/* Logo */}
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="37"
            viewBox="0 0 100 37"
            fill="none"
          >
            <rect
              x="1"
              y="1"
              width="98"
              height="35"
              fill="#E1E1E1"
              stroke="#55565A"
              strokeWidth="2"
            />
            <line
              y1="-1"
              x2="106.2"
              y2="-1"
              transform="matrix(0.938633 0.344916 -0.734407 0.678709 0 0.370003)"
              stroke="#55565A"
              strokeWidth="2"
            />
            <line
              y1="-1"
              x2="106.2"
              y2="-1"
              transform="matrix(-0.938633 0.344916 -0.734407 -0.678709 99.6825 0)"
              stroke="#55565A"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <Button variant="filled" size="sm">
            Log In
          </Button>
          <Button variant="filled" size="sm">
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
