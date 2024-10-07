import React from 'react';

const CategoryDropdown = () => {
  return (
    <select className="dropdown">
      <option value="">Choose category</option>
      <option value="design">Design</option>
      <option value="development">Development</option>
      <option value="consulting">Consulting</option>
    </select>
  );
};

export default CategoryDropdown;
