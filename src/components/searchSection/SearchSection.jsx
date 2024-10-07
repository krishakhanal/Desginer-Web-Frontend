import React from 'react';
import PriceDropdown from './PriceDropdown';
import CategoryDropdown from './CategoryDropdown';
import PlanDropdown from './PlanDropdown';
import './SearchSection.css';
import SearchButton from './SearchButton';
import SearchBox from './SearchBox';

const SearchSection = () => {
  return (
    <div className="search-section">
      <h3 className="search-title">Search Work by Title</h3>
      <SearchBox />
      <div className="dropdowns-container">
        <CategoryDropdown />
        <PriceDropdown />
        <PlanDropdown />
       
      </div>
      <SearchButton />
    </div>
  );
};

export default SearchSection;
