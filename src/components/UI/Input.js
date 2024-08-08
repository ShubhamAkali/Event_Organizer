import React from 'react';

const Input = ({ type, name, value, onChange, placeholder, className }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      required
    />
  );
};

export default Input;
