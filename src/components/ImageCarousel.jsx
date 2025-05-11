import React, { useState, useEffect, useCallback } from "react";
import "./ImageCarousel.css";

const ImageCarousel = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const images = [
    "/Gallery/Imagen de WhatsApp 2025-05-09 a las 17.53.16_46ffb5ed.jpg",
    "/Gallery/Imagen de WhatsApp 2025-05-09 a las 17.54.10_a074ff1f.jpg",
    "/Gallery/Imagen de WhatsApp 2025-05-09 a las 21.01.31_28277d90.jpg",
    "/Gallery/Imagen de WhatsApp 2025-05-09 a las 21.28.32_2308259f.jpg",
    "/Gallery/Imagen de WhatsApp 2025-05-09 a las 22.14.12_06c7ca6f.jpg",
    "/Gallery/Imagen de WhatsApp 2025-05-09 a las 22.19.55_ffb4d94d.jpg",
    "/Gallery/Imagen de WhatsApp 2025-05-09 a las 23.12.54_698e12aa.jpg",
    "/Gallery/Imagen de WhatsApp 2025-05-09 a las 23.34.36_c14df7c1.jpg",
    "/Gallery/Imagen de WhatsApp 2025-05-10 a las 16.48.30_736d5b9c.jpg",
    "/Gallery/Imagen de WhatsApp 2025-05-10 a las 22.40.31_f21d5fb3.jpg",
    "/Gallery/Imagen de WhatsApp 2025-05-11 a las 00.34.10_d54b13b5.jpg",
    "/Gallery/Imagen de WhatsApp 2025-05-11 a las 00.54.56_b0d1dace.jpg",
    "/Gallery/Imagen de WhatsApp 2025-05-11 a las 11.54.23_4e33f71b.jpg",
    "/Gallery/Imagen de WhatsApp 2025-05-11 a las 11.54.23_66c28f65.jpg",
    "/Gallery/Imagen de WhatsApp 2025-05-11 a las 11.57.45_5e822266.jpg",
    "/Gallery/Imagen de WhatsApp 2025-05-11 a las 12.22.43_4e2b5324.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const goToNext = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setTimeout(() => setIsTransitioning(false), 800);
    }
  }, [isTransitioning, images.length]);

  const goToPrevious = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      setTimeout(() => setIsTransitioning(false), 800);
    }
  }, [isTransitioning, images.length]);

  const goToSlide = useCallback((index) => {
    if (!isTransitioning && index !== currentIndex) {
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 800);
    }
  }, [isTransitioning, currentIndex]);

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-glass">
        <div className="carousel-content">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className={`carousel-image ${isTransitioning ? 'transitioning' : ''}`}
            style={{
              transform: isTransitioning ? 'scale(1.05)' : 'scale(1)',
              opacity: isTransitioning ? '0.8' : '1'
            }}
          />
          <button className="carousel-control prev" onClick={goToPrevious}>
            ❮
          </button>
          <button className="carousel-control next" onClick={goToNext}>
            ❯
          </button>
          <button
            className={`auto-play-button ${isAutoPlaying ? "playing" : ""}`}
            onClick={toggleAutoPlay}
          >
            {isAutoPlaying ? "⏸" : "▶"}
          </button>
        </div>
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
