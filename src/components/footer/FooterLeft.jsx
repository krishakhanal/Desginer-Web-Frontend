import React from 'react';
import image from '../images/footer-logo.png'; 
import RightContent from './RightContent';
import Cardright from './Cardright'; 
import { useLocation, Link } from 'react-router-dom';

const FooterLeft = () => {
  const location = useLocation(); 

  return (
    <div className="footer-left">
      <div className="footer-top-content">
        <div>
          <img src={image} alt="footer logo" />
          <p>Designer is free Bootstrap v5.1.3 CSS website template.<br />
          Everyone can get the best HTML CSS templates from<br /> TemplateMo website.</p>
        </div>
        <div className='about-cards'>
          <RightContent />
          <Cardright /> 
        </div>
      </div>

      <div className="newsletter">
        <h3>Subscribe To Our Newsletter</h3>
        <div className="newsletter-input-container">
          <input type="email" placeholder="Type your email..." />
          <button>
            Submit &rarr;
          </button>
        </div>
      </div>

      <div className='copy-right'>
        <p>Copyright © 2024 Krisha KhanalAll Rights Reserved.</p>
        <Link to={location.pathname} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <p>Go to top</p>
        </Link>
      </div>
    </div>
  );
};

export default FooterLeft;
