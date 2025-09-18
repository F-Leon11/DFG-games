import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../Styles/ImageCarousel.css";

const images = [
  "https://www.minecraft.net/content/dam/games/minecraft/key-art/Vanilla-PMP_Collection-Carousel-0_Buzzy-Bees_1280x768.jpg",
  "https://a.storyblok.com/f/178900/1280x720/3fcff9fdce/codbo6.jpg",
  "https://cdn2.unrealengine.com/fg-survival-thumbnail-1920x1080-d1f064a913a9.jpg?resize=1&w=1920",
  "https://assetsio.gnwcdn.com/Genshin-Impact-5.0-release-date%2C-5.0-Banners-and-events-cover.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
  "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000079721/a4dc9797d56c0a36d0166b71c76d032b614d75b3a599486821c9ee62e2ad2970",
  "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4IZecJyhvcIUxxu0Rd1vjX/b9fb7577b74b56704d3d2b34be639397/R6S_Y7_KEYART_STANDARD.jpg",
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Rotación automática cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      {/* Imágenes */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Carousel image ${index + 1}`}
          className={`carousel-image ${
            index === currentIndex ? "active" : "inactive"
          }`}
        />
      ))}

      {/* Flechas */}
      <button onClick={goToPrevious} className="arrow left" aria-label="Prev">
        <ChevronLeft size={24} />
      </button>
      <button onClick={goToNext} className="arrow right" aria-label="Next">
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="dots">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`dot ${index === currentIndex ? "active-dot" : ""}`}
          />
        ))}
      </div>

      {/* Barra de progreso */}
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default ImageCarousel;
