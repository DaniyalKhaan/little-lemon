import React from 'react';
import Nav from "./Nav.js"
import logo from "../assets/Logo.svg";

function Header() {
  return (
    <header className='section'>

      <div className='container'>

      <a href='#'>
      <img src={logo} alt='Little Lemon Logo'/>
      </a>

      <Nav />

      </div>






    </header>
  )
}

export default Header