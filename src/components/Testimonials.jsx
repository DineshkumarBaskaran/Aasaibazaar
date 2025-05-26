import React from 'react';
import arjun from '../assets/images/arjun.jpeg';
import meena from '../assets/images/meena.jpeg';
import vijay from '../assets/images/vijay.jpeg';

const testimonials = [
  {
    id: 1,
    name: 'Meena.R',
    city: 'Coimbatore',
    content: "I've never tasted jaggery this fresh. Aasaibazaar is a game-changer!",
    image: meena
  },
  {
    id: 2,
    name: 'Arjun.M',
    city: 'Bangalore',
    content: "I switched to organic for my kids, and this is the best platform I've found. Reliable and affordable.",
    image: arjun
  },
  {
    id: 3,
    name: 'Vijay.K',
    city: 'Chennai',
    content: "I've been using Aasaibazaar for years. Their products are consistently good and the service is top-notch.",
    image: vijay
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-5">
      <div className="container">
        <h2 className="display-4 fw-bold text-center mb-5 text-white" data-aos="fade-up">Testimonials</h2>
        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="col-md-4" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-circle mb-3"
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                    data-aos="zoom-in"
                    data-aos-delay={index * 100 + 100}
                  />
                  <p className="card-text mb-4" data-aos="fade-up" data-aos-delay={index * 100 + 200}>{testimonial.content}</p>
                  <h5 className="card-title fw-bold mb-1" data-aos="fade-up" data-aos-delay={index * 100 + 300}>{testimonial.name}</h5>
                  <p className="card-text text-muted" data-aos="fade-up" data-aos-delay={index * 100 + 400}>{testimonial.city}</p>
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