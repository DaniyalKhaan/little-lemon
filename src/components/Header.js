import React, { useState, useEffect } from 'react';
import Nav from "./Nav.js"
import logo from "../assets/Logo.svg";
import { Link } from 'react-router-dom';

function Header() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isVisible ? 'visible' : 'hidden'}`}>

      <div className='container'>

      <Link to="/">
      <img src={logo} width={200} alt='Little Lemon Logo'/>
      </Link>

      <Nav />

      <a href='#' className='btn btn-fill descriptive'>Bookings</a>

      </div>






    </header>
  )
}

export default Header