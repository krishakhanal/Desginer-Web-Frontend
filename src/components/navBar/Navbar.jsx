import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import './Navbar.css';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    
 
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []); 

  return (
    <nav className={navbar ? 'navbar active' : 'navbar'}>
      <Logo />
      <NavLinks />
    </nav>
  );
};

export default Navbar;
