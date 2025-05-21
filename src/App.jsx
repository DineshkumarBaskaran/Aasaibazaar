import React from 'react'
import Navbar from './components/Navbar';
import Marquee from './components/Marquee';
import Carousel from './components/Carousel';
import About from './components/About';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
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
