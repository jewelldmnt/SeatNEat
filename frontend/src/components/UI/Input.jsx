import React, { useState } from "react";

const Input = ({ label, type = "text", required = false }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="relative w-full">
      {/* Floating Label */}
      <label
        className={`absolute left-3 px-1 transition-all -top-2 text-sm bg-white text-neutral-500 ${
          required ? "required" : ""
        }`}
      >
        {label}
      </label>

      {/* Input Field */}
      <input
        type={type} // Dynamic input type
        className={`w-full px-3 pt-4 pb-2 border border-neutral-500 bg-transparent rounded-md 
    focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        required={required}
      />
    </div>
  );
};

export default Input;
