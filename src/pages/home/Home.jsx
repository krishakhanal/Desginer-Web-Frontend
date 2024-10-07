import React, { useRef } from 'react';

import HeroSection from '../../components/heroSection/HeroSection';
import SearchSection from '../../components/searchSection/SearchSection';

import './home.css';
import Explore from '../../components/explore/Explore';

const Home = () => {
  const exploreRef = useRef(); 
  
  return ( 
    <>
    <div className="home">
      <HeroSection  exploreRef={exploreRef} />
      <SearchSection />
      
    </div>
     <Explore ref={exploreRef} />
     
     </>
  );
};

export default Home;
