import React from 'react';
import chicagoBanner from "../assets/restauranfood.jpg";
import { Link } from 'react-router-dom';
import BookingPage from './BookingPage';

function Chicago() {
  return (
    <section className='section chicago'>
      <div className='container'>

        <div className='chicago-content'>

            <div>
                <h2 className='display-title text-yellow'>Little Lemon</h2>
                <p className='subtitle text-white' style={{marginTop: '-24px'}}>Chicago</p>
            </div>


            <p className='paragraph text-white'>
              Located in the heart of Chicago, Little Lemon offers a unique dining experience
              with a rich history and a passion for quality ingredients.
            </p>

            <Link to="/bookings" className='btn btn-fill descriptive'>Reserve A Table</Link>
        </div>

      <img
      className='image chicago-banner'
      width={320}
      height={350}
      src={chicagoBanner} alt='Little Lemon Food'/>



      </div>
  </section>
  )
}

export default Chicago