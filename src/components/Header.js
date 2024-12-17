import React from 'react';
import Nav from "./Nav.js"
import logo from "../assets/Logo.svg";

function Header() {
  return (
    <header className='section'>

      <a href='#'>
      <img src={logo} alt='Little Lemon Logo'/>
      </a>

      <Nav />





    </header>
  )
}

export default Header