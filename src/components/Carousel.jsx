import React from 'react';
import banner1 from '../assets/images/banner1.avif';
import banner2 from '../assets/images/banner2.avif';
import banner3 from '../assets/images/banner3.avif';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    image: banner1
  },
  {
    image: banner2
  },
  {
    image: banner3
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
    <div className="position-relative" style={{ height: '500px' }} data-aos="fade">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="position-relative" style={{ height: '500px' }}>
              <img
                src={slide.image}
                alt={slide.title}
                className="w-100 h-100 object-fit-cover"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              />
              <div 
                className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
                data-aos="fade-up"
                data-aos-delay={index * 100 + 200}
              >
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