import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul className='Nav-links-list'>
        <li><Link To="/">Home</Link></li>
        <li><Link To="/specials">Specials</Link></li>
        <li><Link To="/testomonials">Testomonials</Link></li>
        <li><Link to="/chicago">About Chicago</Link></li>
        <li><Link to="/bookings">Bookings</Link></li>
      </ul>

    </nav>
  )
}

export default Nav