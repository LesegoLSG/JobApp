import React, { useState, useEffect } from "react";

// Reusables input field
const InputField = ({
  placeholder,
  value,
  onChange,
  type = "text",
  name,
  validate, // Validation function passed as prop
  errorMessage,
}) => {
  const [isInvalid, setIsInvalid] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e) => {
    const val = e.target.value;
    onChange(e); // Call parent onChange handler

    if (validate) {
      setIsInvalid(!validate(val)); // Validate input
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false); // Input is no longer focused
  };

  useEffect(() => {
    // Hide error message when input is not focused
    if (!isFocused) {
      setIsInvalid(false);
    }
  }, [isFocused]);

  return (
    <div>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`mt-1 w-full px-4 py-2 border rounded-lg focus:ring-[#1F6E8C] focus:border-[#1F6E8C] text-gray-900 ${
          isInvalid ? "border-red-500" : "border-gray-300"
        }`}
        required
      />
      {isInvalid && isFocused && (
        <span className="text-red-600 text-sm">{errorMessage}</span>
      )}
    </div>
  );
};

export default InputField;
