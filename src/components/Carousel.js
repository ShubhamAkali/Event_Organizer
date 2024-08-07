// src/components/Carousel.js
import React from 'react';
import Slider from 'react-slick';
import '../styles/carousel.css'; // Import your custom CSS

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="carousel-container relative w-full overflow-hidden">
      <Slider {...settings}>
        <div className="relative w-full h-full">
          <img src="/assets/images/event1.jpg" alt="Slide 1" className="w-full h-full object-cover" />
        </div>
        <div className="relative w-full h-full">
          <img src="/assets/images/event2.jpg" alt="Slide 2" className="w-full h-full object-cover" />
        </div>
        <div className="relative w-full h-full">
          <img src="/assets/images/event3.jpeg" alt="Slide 3" className="w-full h-full object-cover" />
        </div>
        <div className="relative w-full h-full">
          <img src="/assets/images/event4.jpg" alt="Slide 4" className="w-full h-full object-cover" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
