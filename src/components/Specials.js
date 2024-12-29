import React from 'react';
import greekSaladPhoto from '../assets/greek salad.jpg';
import bruchettaPhoto from '../assets/bruchetta.svg';
import lemonDesertPhoto from '../assets/lemon dessert.jpg';
import { Link } from 'react-router-dom';

function Specials() {
  const specials = [
    { imgUrl: greekSaladPhoto, name: 'Greek Salad', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, consequatur ut maxime natus amet pariatur deserunt atque.', price: '$12.99' },
    { imgUrl: bruchettaPhoto, name: 'Bruchetta', description: 'iure molestiae libero optio nostrum quos quidem cum totam officia numquam accusamus dignissimos ab harum accusantium.', price: '$19.99' },
    { imgUrl: lemonDesertPhoto, name: 'Lemon Desert', description: 'ullam dolore quo doloribus earum eius molestias. Odio, saepe eos unde consectetur est dignissimos, placeat maxime expedita.', price: '$9.99' },
  ];
  return (
      <section className='section specials'>
        <div className='container'>

          <div className='specials-top' >
            <h2 className='display-title'>This Weeks Specials!</h2>
            <a href='#' className='btn btn-fill descriptive' aria-label='Menu Button'>Online Menu</a>
          </div>

          <div className='specials-cards'>
              <ul className='cards-row'>
                {specials.map( (special, index ) => ( 
                  <li key={index} className='card'>
                    <img src={special.imgUrl} style={{ width: '100%', height: '244px' }} />
                    <div className='card-wrapper'>
                      <h4 className='card-title'>{special.name}</h4>
                      <span className='highlight-text'>{special.price}</span>
                    </div>
                    <div>
                    <p className='paragraph'>{special.description}</p>
                    </div>
                    <Link className='card-link descriptive order'>
                    <span>Order a Delivery</span>
                    <span class="material-symbols-outlined moped">moped</span>
                    </Link>
                    
                  </li>
                ))}
              </ul>

          </div>



        </div>

      </section>
  )
}

export default Specials