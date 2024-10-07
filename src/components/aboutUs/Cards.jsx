import React from 'react';


import Cardicon from './Cardicon';
import { RiCustomerService2Fill } from "react-icons/ri";
import { BiSolidCustomize } from "react-icons/bi";
import { CgGirl } from "react-icons/cg";
import './about.css'


const Cards = () => {
  return (
   
   
      <div className='customer'>
      <div className="about-section1">
      <Cardicon text={'Active Support 24/7'} icon={<RiCustomerService2Fill /> } />
      </div>
      <div className="about-section2">
      <Cardicon text={'Customer Care'} icon={<CgGirl />} />
      </div>
      <div className="about-section3">
      <Cardicon text={'Easy to Customize'} icon={<BiSolidCustomize /> } />
      </div>
     </div>
     
      
   
  );
};

export default Cards;

