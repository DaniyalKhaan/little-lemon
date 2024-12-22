import React from 'react'

function Specials() {
  const specials = [
    { name: 'Spaghetti Carbonara', description: 'Creamy and flavorful.', price: '$12.99' },
    { name: 'Grilled Salmon', description: 'Served with fresh veggies.', price: '$19.99' },
    { name: 'Margherita Pizza', description: 'Classic Italian pizza.', price: '$9.99' },
  ];
  return (
      <section className='specials'>
        <h2>Specials</h2>
        <ul>
          {specials.map( (special, index ) => ( 
            <li key={index}>
              <h2>{special.name}</h2>
              <p>{special.description}</p>
              <p>{special.price}</p>
            </li>
          ))}
        </ul>

      </section>
  )
}

export default Specials