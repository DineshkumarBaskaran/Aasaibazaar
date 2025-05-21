import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src="/images/about.png"
              alt="Organic Palm Farm"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-lg-6">
            <h2 className="display-4 fw-bold mb-4 text-white">About Aasaibazaar</h2>
            <p className="lead mb-4 text-white">
              We are passionate about bringing you the purest and most natural palm jaggery products,
              sourced directly from organic palm farms.
            </p>
            <div className="row g-4">
              <div className="col-md-6">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-check-circle-fill text-warning fs-4 me-2"></i>
                  <h5 className="mb-0 text-warning">100% Organic</h5>
                </div>
                <p className="text-muted">
                  Our products are certified organic and free from any artificial additives.
                </p>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-check-circle-fill text-warning fs-4 me-2"></i>
                  <h5 className="mb-0 text-warning">Direct from Farm</h5>
                </div>
                <p className="text-muted">
                  We source our palm jaggery directly from trusted organic palm farmers.
                </p>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-check-circle-fill text-warning fs-4 me-2"></i>
                  <h5 className="mb-0 text-warning">Traditional Process</h5>
                </div>
                <p className="text-muted">
                  We follow traditional methods to preserve the natural goodness of palm jaggery.
                </p>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-check-circle-fill text-warning   fs-4 me-2"></i>
                  <h5 className="mb-0 text-warning">Health Benefits</h5>
                </div>
                <p className="text-muted">
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