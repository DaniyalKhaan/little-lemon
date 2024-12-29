import React from 'react';
import { Link, useLocation } from 'react-router-dom';


function Nav() {
  const location = useLocation();
  const isActive = path => location.pathname === path;
  return (
    <nav className='navbar'>
      <ul className='nav-links-list card-title'>

        <li className={isActive("/") ? "active" : ""}><Link className={'highlight-text'} to="/">Home</Link></li>
        <li className={isActive("/specials") ? "active" : ""}><Link className='highlight-text' to="/specials">Specials</Link></li>
        <li className={isActive("/about") ? "active" : ""}><Link className='highlight-text' to="/about">About</Link></li>
        <li className={isActive("/testimonials") ? "active" : ""}><Link className='highlight-text' to="/testimonials">Testomonials</Link></li>
        <li className={isActive("/bookings") ? "active" : ""}><Link className='highlight-text' to="/bookings">Bookings</Link></li>
      </ul>

    </nav>
  )
}

export default Nav;