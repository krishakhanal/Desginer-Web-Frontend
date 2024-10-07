// src/NavLinks.js
import {NavLink } from "react-router-dom";
import React from 'react';

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to='/'  className={({ isActive }) => (isActive ? "link active-link" : "link")} >
          Homepage
        </NavLink>
      </li>
      <li>
        <NavLink to='/aboutus'  className={({ isActive }) => (isActive ? "link active-link" : "link")} >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink to='/explore'  className={({ isActive }) => (isActive ? "link active-link" : "link")}>
          Explore Work
        </NavLink>
      </li>
      {/* <li>
        <NavLink to='/trending'  className={({ isActive }) => (isActive ? "link active-link" : "link")}>
          Trending
        </NavLink>
      </li> */}
      <li>
        <NavLink to='/contactus'  className={({ isActive }) => (isActive ? "link active-link" : "link")}>
          Contact Us
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
