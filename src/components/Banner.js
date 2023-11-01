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