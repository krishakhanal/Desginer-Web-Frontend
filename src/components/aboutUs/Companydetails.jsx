import React from 'react';
import image from '../images/about.jpg'; 
import './Companydetails.css'

function Companydetails() {
  return (
    <div className="companydetails-section">
      <div className="about-text">
        <h2>A COMPANY WHO SPECIALIZES</h2>
        <h1> ____ IN INTERIOR DESIGN.</h1>
      </div>
      <div className="about-content">
        <div className="left-image-container">
          <img src={image} alt="Sofa" />
        </div>
        <div className="content-container">
         <p>Designer HTML5 Template is 100% free to download provided by TemplateMo website. You are allowed  
         to use this template for your commercial or business websites. You are NOT allowed to redistribute  the downloadable ZIP file of this template on any other website. Please contact us for more info.
         </p>
         <p>
         Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel  cilisis lorem ipsum dolor sit amet, consectetur adipiscingii elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         </p>

         <h3>How it Works?</h3>
      
         
        </div>
      </div>
    </div>
  );
}

export default Companydetails;




