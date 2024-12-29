import React from 'react';
import logo from "../assets/footerLogo.png";
import Nav from './Nav';


function Footer() {
  return (
    <footer className='section footer'>

      <div className='container'>
      <div className='brand'>
        <a href='#'><img width={100} height={200} src={logo} alt='Little Lemon Logo'/></a>
      </div>
      <div>
        <h4 className='card-title'>Navigation</h4>
        <Nav />
      </div>
      
      <div>
        <h4 className='card-title'>Contact</h4>
        <ul>
          <li>
            <p className='paragraph text-dark'>Email: <a href='mailto:littlelemon@gmail.com'>littlelemon@gmail.com</a></p>
          </li>
          <li>
            <p className='paragraph text-dark'>Phone: <a href='tel:123456789'>123456789</a></p>
          </li>
          <li>
            <address className='text-dark paragraph'>Little Lemon, Chicago</address>
          </li>
        </ul>
        
      </div>

      <div>
        <h4 className='card-title'>Socail</h4>
        <ul>
        <li><a className='paragraph text-dark' href='#'>Insta</a></li>
        <li><a className='paragraph text-dark' href='#'>Twitter</a></li>
        <li><a className='paragraph text-dark' href='#'>Youtube</a></li>
      </ul>
      </div>
      </div>
      

    </footer>
  )
}

export default Footer