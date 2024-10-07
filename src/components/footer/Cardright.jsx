import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



import CardT from './CardT';


const Cardright = () => {
  return (
   
   
      <div className='card-follow'>
       <h3>Follow Us</h3>
      <CardT className = 'fb' icon={<FaFacebook /> } text={ 'Facebook'}/>
      <CardT icon={<FaTwitter />}text={' Twitter'}  />
      <CardT icon={<FaLinkedin />} text={'Linkedin'}  />
    
     </div>
     
      
   
  );
};

export default Cardright;

