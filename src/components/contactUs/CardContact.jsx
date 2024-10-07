import React from 'react';



import { RiCustomerService2Fill } from "react-icons/ri";

import { MdMarkEmailRead } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

import './contactUs.css'
import CardContactContent from './CardContactContent';


const CardContact = () => {
  return (
   
   
      <div className='contact-customer'>
      <div className="contact-section1">
      <CardContactContent icon={ <CgProfile />} heading={'Mailing Address'} text={'Kathmandu,Nepal'} />
      </div>
      <div className="contact-section2">
      <CardContactContent icon={<MdMarkEmailRead />} heading={'Email Address'} text='contact@company.com' />
      </div>
      <div className="contact-section3">
      <CardContactContent icon={<RiCustomerService2Fill /> } heading={'Chat With Us'} text='chat@company.com'  />
      </div>
     </div>
     
      
   
  );
};

export default  CardContact;

