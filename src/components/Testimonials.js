import React from 'react';

function Testimonials() {
  const testimonials = [
    { name: 'John Doe', review: 'Amazing food and great service!', rating: 5 },
    { name: 'Jane Smith', review: 'The ambiance is lovely.', rating: 4 },
    { name: 'Mike Johnson', review: 'Highly recommend the pasta.', rating: 5 },
  ];
  return (
    <section>
      <h2>What Our Customers Say About Us</h2>
      <ul>
        {testimonials.map( (testi, index) => (
          <li key={index}>
            <p>"{testi.review}"</p>
            <p>- {testi.name} ({testi.rating} stars)</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Testimonials;