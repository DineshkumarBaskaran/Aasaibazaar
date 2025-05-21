import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    image: '/images/banner1.avif',

  },
  {
    image: '/images/banner2.avif',
  
  },
  {
    image: '/images/banner3.avif',
  }
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    fade: true
  };

  return (
    <div className="position-relative" style={{ height: '500px' }}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="position-relative" style={{ height: '500px' }}>
              <img
                src={slide.image}
                alt={slide.title}
                className="w-100 h-100 object-fit-cover"
              />
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                <h2 className="display-4 fw-bold mb-3">{slide.title}</h2>
                <p className="h4">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel; 