

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';

import './App.css'; 
import Home from "./pages/home/Home";
import Aboutus from "./components/aboutUs/Aboutus";
import Navbar from "./components/navBar/Navbar";
import { Footer } from "./components/footer/Footer";
import ExploreWork from "./components/exploreWorks/ExploreWork";
import ContactUs from "./components/contactUs/ContactUs";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="app"> 
     
      <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
     <Route path='/' element = {<Home />} />
     <Route path='/aboutus' element = {<Aboutus />} />
     <Route path='/explore' element = {<ExploreWork />} />
     <Route path='/contactus' element = {<ContactUs />} />


     
     </Routes>
     <Footer />
     </BrowserRouter>
      
    </div>
  );
}

export default App;
