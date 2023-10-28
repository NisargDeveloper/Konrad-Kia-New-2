import React, { useState } from "react";
import "./App.css";
import niroEv from "./assets/Niro-EV.jpg";
import kiaEv from "./assets/Kia-EV9.jpg";
import forte from "./assets/Kia-Forte.jpg";
export default function Main() {
  const images = [niroEv, kiaEv, forte];
  const carName = ["2023 Niro EV", "The Kia EV9", "Kia Forte"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    console.log("Next slide clicked");
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="main">
      <div className="imageContainer">
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className="image1"
        />
        <p className="carName">{carName[currentImageIndex]}</p>
      </div>
      <div className="buttonClass">
        <button className="leftButton" onClick={prevSlide}>
          <span className="spanButton">←</span>
        </button>
        <button className="rightButton">
          <span className="spanButton" onClick={nextSlide}>
            →
          </span>
        </button>
      </div>
    </div>
  );
}
