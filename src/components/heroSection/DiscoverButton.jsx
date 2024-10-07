import React from 'react';

const DiscoverButton = ({button,exploreRef}) => {
  return (
    <button className="home-button" onClick={() => {
      exploreRef.current?.scrollIntoView({
        behavior:'smooth'
      })
    }}>{button}</button>
  );
};

export default DiscoverButton;
