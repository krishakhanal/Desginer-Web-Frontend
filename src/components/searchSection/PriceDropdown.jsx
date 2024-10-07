import React from 'react';

const PriceDropdown = () => {
  return (
    <select className="dropdown">
      <option value="">Choose price</option>
      <option value="0-100">$0 - $100</option>
      <option value="101-500">$101 - $500</option>
      <option value="501-1000">$501 - $1000</option>
    </select>
  );
};

export default PriceDropdown;
