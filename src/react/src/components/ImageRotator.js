import React, { useEffect, useState } from "react";
import "./ImageRotator.css";
import { PERSONAL_INFO } from "../constants";

function ImageRotator({ images = [], interval = 1000, alt = "", showNavigator = true, className = "" }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const imageCount = images.length > 0 ? images.length : 1; // 1 for fallback image
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % imageCount);
    }, interval);
    return () => clearInterval(timer);
  }, [images, interval]);

  const handleDotClick = (idx) => {
    setCurrent(idx);
  };

  return (
    <div className={`image-rotator-container ${className}`}>
      {showNavigator && images.length > 1 && (
        <div className="image-rotator-dots">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`image-rotator-dot${
                current === idx ? " active" : ""
              }`}
              onClick={() => handleDotClick(idx)}
            />
          ))}
        </div>
      )}
      <div className="image-rotator-image-wrapper">
        <img
          src={images.length > 0 ? images[current] : PERSONAL_INFO.noImage}
          alt={alt}
          className="image-rotator-img"
        />
      </div>
    </div>
  );
}

export default ImageRotator;
