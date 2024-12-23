import React, {useReducer} from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Specials from './Specials';
import HomePage from './HomePage';
import Testimonials from './Testimonials';
import Chicago from './Chicago';
import BookingPage from './BookingPage';

const Main = () => {

  // Reducer functions
  const initializeTimes = () => [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ];

  const updateTimes = (state, action) => {
    // For now, the same times are returned regardless of date.
    if (action.type === 'UPDATE_TIMES') {
      return initializeTimes(); // Replace this with logic based on action.payload.date if needed
    }
    return state;
  };

  // useReducer hook
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);


  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/specials" element={<Specials />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/chicago" element={<Chicago />} />
        <Route path="/bookings" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} />
      </Routes>
    </div>
  );
};

export default Main;
