<<<<<<< HEAD
import React, { useState } from 'react';
import './Banner.css'; // Import your CSS file
import './style/Banner';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    '.styles/Banner/code-view.jpg',
    '.styles/Banner/computer-view.jpg',
    '.styles/Banner/hardware.jpg',
    '.styles/Banner/robot-arm.jpg'
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className='banner'>
      <button onClick={prevSlide} className='control-btn'>Previous</button>
      <div className='slider-container'>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide})` }}
          ></div>
        ))}
      </div>
      <button onClick={nextSlide} className='control-btn'>Next</button>
    </div>
  );
}

export default Banner;
=======
import React, { useState } from 'react'
import './Banner.css';

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        './downloads/Engineering.jpeg'
    ]

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <div className='banner'>
            <button onClick={prevSlide}
        </div>
    )

}
>>>>>>> d5747414a07d92a42aaacd5c7da1e1e7e42c20d1
