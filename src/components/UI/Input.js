import React from 'react';

const Input = ({ type, placeholder, value, onChange, className }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border rounded py-2 px-4 ${className}`}
    />
  );
};

export default Input;
