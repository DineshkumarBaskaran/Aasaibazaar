import React, { useEffect } from 'react'
import AOS from 'aos'
import Navbar from './components/Navbar';
import Marquee from './components/Marquee';
import Carousel from './components/Carousel';
import About from './components/About';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="min-h-screen bg-success">
      <Marquee />
      <Navbar />
      <main>
        <Carousel />
        <About />
        <Products />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
