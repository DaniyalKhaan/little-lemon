import React from 'react';
import BookingForm from './BookingForm';


function BookingPage({ availableTimes, dispatch, submitForm}) {
  return (
    <>
    <section className='booking-page'>

      <div className='container' >

        <div className='content'>
          <h2 className='display-title'>Reserve Your Table</h2>
          <h4 className='paragraph'>Fill this form in order to reserve table for you</h4>
        </div>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />

      </div>

    </section>
    </>
  )
}

export default BookingPage;