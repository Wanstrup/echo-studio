// Slideshow.jsx
import React, { useState } from 'react';

// Billeder til slideshowet
import case1 from '../assets/skor-logo3.webp';  // Udskift med dine egne billeder
import case3 from '../assets/nelogo.webp';
import case4 from '../assets/logo.webp';
import case5 from '../assets/vwlogo.webp';

const slides = [
  { image: case1, alt: 'Case 1', title: 'Skor: ', link: 'https://skor.nikolineschmidt.dk/' },
  { image: case3, alt: 'Case 3', title: 'Nikoline Portefolio: ', link: 'https://portfolio.nikolineschmidt.dk/' },
  { image: case4, alt: 'Case 4', title: 'Sille Portefolio: ', link: 'https://portfolio.sgreve.dk/' },
  { image: case5, alt: 'Case 5', title: 'Villads Portefolio: ', link: 'https://portfolio.vwanstrup.dk/' }
];

function Slideshow() { 
  const [currentSlide, setCurrentSlide] = useState(0);

  // Funktion til at navigere til næste slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Funktion til at navigere til forrige slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slideshow-container">
      <div className="slideshow">
        <div className="slide">
          <img src={slides[currentSlide].image} alt={slides[currentSlide].alt} className="slide-image" />
          <h3 className="slide-title">{slides[currentSlide].title}</h3>
          
          {/* Knap der linker til projektet */}
          <a href={slides[currentSlide].link} className="project-link-btn">
            Se Projekt
          </a>
        </div>
      </div>
      
      {/* Navigationsknapper */}
      <button onClick={prevSlide} className="prev-btn">❮</button>
      <button onClick={nextSlide} className="next-btn">❯</button>
    </div>
  );
}

export default Slideshow;

