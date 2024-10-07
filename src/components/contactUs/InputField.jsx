import React from 'react';

const InputField = ({ type, placeholder, className,name, required }) => {
  return (
    <input 
      type={type} 
      placeholder={placeholder} 
      className={className} 
      name={name}
      required={required} 
    />
  );
};

export default InputField;
