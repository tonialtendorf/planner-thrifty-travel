import React, { useState } from 'react';
import './HomeStyle.css';
import Excursions from '../assets/Excursions.PNG';
import Flights from '../assets/Flights.PNG';
import Hiking from '../assets/Hiking.PNG';
import thriftytravel from '../assets/thriftytravel.PNG';

const Carousel = () => {
  const [images] = useState([
    thriftytravel,
    Excursions,
    Flights,
    Hiking
  ]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + images.length - 1) % images.length
    );
  };

  const currentImage = images[currentImageIndex];

  return (
    <div className="carousel-container">
      <div className="carousel-image">
        <img src={currentImage} alt="Carousel" />
        <button className="contact-button">Contact Us</button>
      </div>
  
      <div className="carousel-buttons">
        <button onClick={handlePrevImage}>&lt;</button>
        <button onClick={handleNextImage}>&gt;</button>
      </div>
      <div className="carousel-text">
          <p>Scroll through the images to see what we have to offer and more!</p>
    </div>
   
    </div>
  );
};

const App = () => (
  <div className="App">
    <Carousel />
  </div>
);

export default App;