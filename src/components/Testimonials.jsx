import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Meena.R',
    city: 'Coimbatore',
    content: 'I’ve never tasted jaggery this fresh. Aasaibazaar is a game-changer!',
    image: '/images/meena.jpeg'
  },
  {
    id: 2,
    name: 'Arjun.M',
    city: 'Bangalore',
    content: 'I switched to organic for my kids, and this is the best platform I’ve found. Reliable and affordable.',
    image: '/images/arjun.jpeg'
  },
  {
    id: 3,
    name: 'Vijay.K',
    city: 'Chennai',
    content: 'I’ve been using Aasaibazaar for years. Their products are consistently good and the service is top-notch.',
    image: '/images/vijay.jpeg'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-5">
      <div className="container">
        <h2 className="display-4 fw-bold text-center mb-5 text-white">Testimonials</h2>
        <div className="row g-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-circle mb-3"
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                  />
                  <p className="card-text mb-4">{testimonial.content}</p>
                  <h5 className="card-title fw-bold mb-1">{testimonial.name}</h5>
                  <p className="card-text text-muted">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 