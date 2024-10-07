import React from 'react';

const Dropdown = ({ label, options }) => {
  return (
    <div className="dropdown">
      <label>{label}</label>
      <select>
        <option value="">Choose {label.toLowerCase()}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
