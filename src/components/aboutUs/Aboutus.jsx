import React from 'react';
import Cards from './Cards';

import './about.css';
import Companydetails from './Companydetails';
import ToogleContent from '../toogle/ToogleContent'; 
import { Heading } from '../Heading';
import FooterTop from '../footer/FooterTop';


const Aboutus = () => {
  return (
    <div>
      <div className="about-section">
        <Heading redtext="ABOUT" whitetext="US" />
      </div>

      <div className="card">
        <Cards />
      </div>

      <Companydetails />

      
      <ToogleContent /> 

      <FooterTop />
     
    </div>
  );
};

export default Aboutus;
