import React from 'react';

const PlanDropdown = () => {
  return (
    <select className="dropdown">
      <option value="">Pick a Plan</option>
      <option value="basic">Basic Plan</option>
      <option value="standard">Standard Plan</option>
      <option value="premium">Premium Plan</option>
    </select>
  );
};

export default PlanDropdown;
