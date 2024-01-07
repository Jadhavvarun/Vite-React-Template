import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Home from '../component/Home';
import Signup from '../component/Signup'; // Import the Login component

export default function Routing() {
  return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </div>
  );
}
