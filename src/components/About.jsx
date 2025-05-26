import React from 'react';
import aboutImage from '../assets/images/about.png';

const About = () => {
  return (
    <section id="about" className="py-3 mt-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 mb-3 mb-lg-0" data-aos="fade-right">
            <img
              src={aboutImage}
              alt="Organic Palm Farm"
              className="img-fluid rounded about-img-responsive"
              style={{ 
                width: '100%', 
                height: '400px', 
                objectFit: 'contain',
                padding: '10px'
              }}
            />
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="display-5 fw-bold mb-3 text-white" data-aos="fade-up">About Aasaibazaar</h2>
            <p className="lead mb-3 text-white" data-aos="fade-up" data-aos-delay="100">
              We are passionate about bringing you the purest and most natural palm jaggery products,
              sourced directly from organic palm farms.
            </p>
            <div className="row g-3">
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-check-circle-fill text-warning fs-4 me-2"></i>
                  <h5 className="mb-0 text-warning">100% Organic</h5>
                </div>
                <p className="text-muted small">
                  Our products are certified organic and free from any artificial additives.
                </p>
              </div>
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-check-circle-fill text-warning fs-4 me-2"></i>
                  <h5 className="mb-0 text-warning">Direct from Farm</h5>
                </div>
                <p className="text-muted small">
                  We source our palm jaggery directly from trusted organic palm farmers.
                </p>
              </div>
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="400">
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-check-circle-fill text-warning fs-4 me-2"></i>
                  <h5 className="mb-0 text-warning">Traditional Process</h5>
                </div>
                <p className="text-muted small">
                  We follow traditional methods to preserve the natural goodness of palm jaggery.
                </p>
              </div>
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="500">
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-check-circle-fill text-warning fs-4 me-2"></i>
                  <h5 className="mb-0 text-warning">Health Benefits</h5>
                </div>
                <p className="text-muted small">
                  Rich in minerals and antioxidants, our products promote overall well-being.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 