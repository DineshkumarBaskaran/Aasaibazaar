import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <h5 className="fw-bold mb-3">About Aasaibazaar</h5>
            <p className="text-white">
              We are committed to providing the purest and most natural palm jaggery products,
              sourced directly from organic palm farms.
            </p>
          </div>
          <div className="col-lg-4">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#about" className="text-decoration-none text-white">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#products" className="text-decoration-none text-white">Products</a>
              </li>
              <li className="mb-2">
                <a href="#testimonials" className="text-decoration-none text-white">Testimonials</a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="text-decoration-none text-white">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h5 className="fw-bold mb-3">Contact Info</h5>
            <ul className="list-unstyled text-white">
              <li className="mb-2">
                <i className="bi bi-geo-alt me-2"></i>
                No:3/12, Nadar Nagar Village, Nadupatti Post, 
Bargur TK, Mathur block, Krishnagiri, 
Tamil Nadu - 635203
              </li>
              <li className="mb-2">
                <i className="bi bi-envelope me-2"></i>
                aasaibazaar@gmail.com
              </li>
              <li className="mb-2">
                <i className="bi bi-telephone me-2"></i>
                +91 94872 24491
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0 text-white">
            © 2025 Aasaibazaar. All Rights Reserved. Developed by Artlysoft (www.artlysoft.com)
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <a href="#" className="text-decoration-none text-white me-3">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="text-decoration-none text-white me-3">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="text-decoration-none text-white">
              <i className="bi bi-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 