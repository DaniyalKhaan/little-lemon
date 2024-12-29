import React, { useEffect, useState } from 'react';

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=10');
        const data = await response.json();

        const mockReviews = [
          { review: 'Amazing food and great service!', rating: 5 },
          { review: 'The ambiance is lovely.', rating: 4 },
          { review: 'Highly recommend the pasta.', rating: 5 },
          { review: 'A must-visit for food lovers.', rating: 5 },
          { review: 'The desserts are heavenly.', rating: 4 },
          { review: 'Quick service and friendly staff.', rating: 5 },
          { review: 'The best dining experience I’ve had.', rating: 5 },
          { review: 'Perfect spot for family gatherings.', rating: 4 },
          { review: 'Affordable and delicious.', rating: 5 },
          { review: 'Cozy ambiance and great food.', rating: 4 },
        ];

        const testimonialsWithProfiles = data.results.map((user, index) => ({
          name: `${user.name.first} ${user.name.last}`,
          profilePhoto: user.picture.medium,
          ...mockReviews[index],
        }));

        setTestimonials(testimonialsWithProfiles);
      } catch (error) {
        console.error('Failed to fetch testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className='testimonials'>

      <div className='container'>

      <h2 className='display-title'>What Our Customers Say About Us</h2>
      <div className="testimonials-container">
        {testimonials.length === 0 ? (
          <p>Loading testimonials...</p>
        ) : (
          <div className="scrollable-container">
            {testimonials.map((testi, index) => (
              <div className="testimonial-card" key={index}>
                <img src={testi.profilePhoto} alt={testi.name} className="profile-photo" />
                <div className="testimonial-content">
                  <h4 className='card-title'>{testi.name}</h4>
                  <p className='paragraph'>Rating: {testi.rating} <span class="material-symbols-outlined">star</span></p>
                  <p className='paragraph'>"{testi.review}"</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="custom-scrollbar"></div>

      </div>

      
    </section>
  );
}

export default Testimonials;
