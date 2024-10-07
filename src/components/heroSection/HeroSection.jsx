import React from 'react';
import HeroText from './HeroText';
import DiscoverButton from './DiscoverButton';
import './HeroSection.css';

const HeroSection = ({ exploreRef }) => {
  return (
    <div className="hero-section">
      <HeroText />
      <DiscoverButton button="Discover More" exploreRef={exploreRef}/>
    </div>
  );
};

export default HeroSection;
