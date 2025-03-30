import React, { useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-full max-w-6xl h-[700px] bg-white shadow-lg overflow-hidden">
        {/* Static Sign Up Form (always on left) */}
        <div
          className={`absolute top-0 left-0 h-full w-1/2 p-12 flex flex-col justify-center transition-transform duration-500 ease-in-out ${
            isSignIn
              ? "translate-x-0 opacity-100 z-10"
              : "-translate-x-1/2 opacity-0 z-0"
          }`}
        >
          <h2 className="text-xl font-semibold text-black mb-5 text-center">
            Create an account
          </h2>
          <form className="space-y-5">
            <div>
              <Input type="text" label="Username"></Input>
            </div>
            <div>
              <Input type="email" label="Email"></Input>
            </div>
            <div>
              <Input type="password" label="Password"></Input>
            </div>
            {/* Terms of Service Checkbox */}
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="terms" className="text-xs cursor-pointer">
                By creating an account, I agree to the{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>
                .
              </label>
            </div>
            <button
              type="submit"
              className="w-full h-15 bg-blue-600 text-white font-semibold px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Sign Up
            </button>
            {/* OR sign up with section */}
            <div className="flex items-center">
              <hr className="flex-grow border-gray-300" />
              <span className="px-4 text-neutral-400 text-base font-semibold flex-shrink-0">
                or sign up with
              </span>
              <hr className="flex-grow border-gray-300" />
            </div>
            {/* Social Login Buttons */}
            <Button
              variant="outlined"
              size="md"
              className="text-sm font-medium w-full flex items-center justify-center space-x-3"
            >
              <FaGoogle className="text-lg" />
              <span>Continue with Google</span>
            </Button>

            <Button
              variant="outlined"
              size="md"
              className="text-sm font-medium w-full flex items-center justify-center space-x-3"
            >
              <FaFacebookF className="text-lg" />
              <span>Continue with Facebook</span>
            </Button>
            <div>
              <h3 className="text-center text-sm font-medium text-neutral-500">
                Have an account?{" "}
                <button
                  type="button"
                  onClick={toggleForm}
                  className="underline"
                >
                  Sign In
                </button>
              </h3>
            </div>
          </form>
        </div>

        {/* Static Sign In Form (always on right) */}
        <div
          className={`absolute right-0 top-0 h-full w-1/2 p-12 flex flex-col justify-center transition-transform duration-500 ease-in-out ${
            isSignIn
              ? "translate-x-1/2 opacity-0 z-0"
              : "translate-x-0 opacity-100 z-10"
          }`}
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-5 text-center">
            Sign In
          </h2>
          <form className="space-y-6">
            {/* Social Login Buttons */}
            <Button
              variant="outlined"
              size="md"
              className="text-sm font-medium w-full flex items-center justify-center space-x-3"
            >
              <FaGoogle className="text-lg" />
              <span>Continue with Google</span>
            </Button>

            <Button
              variant="outlined"
              size="md"
              className="text-sm font-medium w-full flex items-center justify-center space-x-3"
            >
              <FaFacebookF className="text-lg" />
              <span>Continue with Facebook</span>
            </Button>
            {/* OR sign up with section */}
            <div className="flex items-center">
              <hr className="flex-grow border-gray-300" />
              <span className="px-4 text-neutral-400 text-base font-semibold flex-shrink-0">
                OR
              </span>
              <hr className="flex-grow border-gray-300" />
            </div>
            <div>
              <Input type="email" label="Username"></Input>
            </div>
            <div>
              <Input type="password" label="Password"></Input>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-xs text-neutral-500 underline pt-2"
                >
                  Forgot Password
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full h-15 bg-blue-600 text-white font-semibold px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Log In
            </button>
            <div>
              <h3 className="text-center text-sm font-medium text-neutral-500">
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={toggleForm}
                  className="underline"
                >
                  Sign Up
                </button>
              </h3>
            </div>
          </form>
        </div>

        {/* Sliding Blue Cover */}
        <div
          className={`absolute z-100 top-0 h-full w-1/2 bg-blue-600 transition-all duration-500 ease-in-out ${
            isSignIn ? "left-1/2" : "left-0"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Auth;
