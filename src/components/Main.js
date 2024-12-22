import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Specials from './Specials';
import HomePage from './HomePage';
import Testimonials from './Testimonials';
import Chicago from './Chicago';
import BookingPage from './BookingPage';

const Main = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/specials" element={<Specials />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/chicago" element={<Chicago />} />
        <Route path="/bookings" element={<BookingPage />} />
      </Routes>
    </div>
  );
};

export default Main;
