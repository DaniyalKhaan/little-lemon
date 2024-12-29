import React, {useEffect, useReducer} from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './Header';
import Specials from './Specials';
import HomePage from './HomePage';
import Testimonials from './Testimonials';
import Chicago from './Chicago';
import BookingPage from './BookingPage';
import {fetchAPI, submitAPI} from './api';
import ConfirmedBooking from './ConfirmedBooking';
import Footer from './Footer';

const Main = () => {

  let navigate = useNavigate();

  const submitForm = async (formData) => {
    const success = await submitAPI(formData);

  if (success) {
    navigate("/table_booked");

  }


}


  const initializeTimes = () => {
    const today = new Date();
    return fetchAPI(today);
  }




  const updateTimes = (state, action) => {
    
    if (action.type === 'UPDATE_TIMES') {
      const availableTimes = fetchAPI(new Date(action.payload)); // Fetch times for the given date
      return availableTimes;
    }
    return state;
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);





  return (
    <div>
      <Header />
      <main className='main'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/about" element={<Chicago />} /> 
          <Route path="/specials" element={<Specials />} /> 
          <Route path="/bookings" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
          <Route path="/table_booked" element={<ConfirmedBooking />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default Main;
