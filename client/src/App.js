import React from 'react';
import {  Routes, Route } from "react-router-dom";
import './App.css';
import LandingPage from './components/LandingPage';
import Contact from './components/ContactPage';
import ServicePage from './components/Services';
import Navbar from './components/Navbar';
import HomeAboutUs from './components/Homepage';

function App() {
  return (
   <div> 
    <Navbar/>
     
     <Routes>
        <Route  exact path="/"Component={LandingPage} ></Route>
        <Route path="/services" element={<ServicePage />} />
        <Route path="/about" element={<HomeAboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      
    </div>
  );
}

export default App;
