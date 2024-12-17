import React from 'react'

function Footer() {
  return (
    <footer className='section'>
      <div>
        <h4>Navigation</h4>
        <ul>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Menu</a></li>
        <li><a href='#'>Reservations</a></li>
        <li><a href='#'>Order Online</a></li>
        <li><a href='#'>Login</a></li>
      </ul>
      </div>
      
      <div>
        <h4>Contact</h4>
        <p>Email:</p>
        <p>Phone:</p>
        <p>Address:</p>
      </div>

      <div>
        <h4>Socail</h4>
        <ul>
        <li><a href='#'>Insta</a></li>
        <li><a href='#'>Twitter</a></li>
        <li><a href='#'>Youtube</a></li>
      </ul>
      </div>

    </footer>
  )
}

export default Footer