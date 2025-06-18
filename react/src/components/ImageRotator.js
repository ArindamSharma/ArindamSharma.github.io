import React, { useEffect, useState } from "react";
import "./ImageRotator.css";

function ImageRotator({ images = [], interval = 1000, alt = "" }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!images.length) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images, interval]);

  if (!images.length) {
    return (
      <div className="image-rotator-container">
        <span className="image-rotator-placeholder">No Image</span>
      </div>
    );
  }

  return (
    <div className="image-rotator-container">
      <img
        src={images[current]}
        alt={alt}
        className="image-rotator-img"
      />
    </div>
  );
}

export default ImageRotator;
