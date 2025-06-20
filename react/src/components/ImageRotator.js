import React, { useEffect, useState } from "react";
import "./ImageRotator.css";

function ImageRotator({ images = [], interval = 1000, alt = "", showNavigator = true }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!images.length) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images, interval]);

  const handleDotClick = (idx) => {
    setCurrent(idx);
  };

  return (
    <div className="image-rotator-container">
      {images.length === 0 ? (
        <span className="image-rotator-placeholder">No Image</span>
      ) : (
        <>
          {showNavigator && (
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
          <img
            src={images[current]}
            alt={alt}
            className="image-rotator-img"
          />
        </>
      )}
    </div>
  );
}

export default ImageRotator;
