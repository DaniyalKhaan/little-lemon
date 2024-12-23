import React from 'react';
import BookingForm from './BookingForm';


function BookingPage({ availableTimes, dispatch, submitForm}) {
  return (
    <>
    <h2>Reserve Your Table</h2>
    <h4>Fill this form in order to reserve table for you</h4>
    <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
    </>
  )
}

export default BookingPage;