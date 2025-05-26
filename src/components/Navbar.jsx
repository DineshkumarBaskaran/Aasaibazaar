import { useState } from 'react';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <a href="#" className="navbar-brand d-flex align-items-center" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
          <img
            src={logo}
            alt="Aasaibazaar"
            className="me-2"
            style={{ height: '50px' }}
          />
          <span>Aasaibazaar</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#products" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('products'); }}>
                Products
              </a>
            </li>
            <li className="nav-item">
              <a href="#testimonials" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}>
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 