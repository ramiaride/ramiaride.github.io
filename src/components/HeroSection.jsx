import { useEffect, useState } from 'react';
import './styles/HeroSection.css';
import heroImage1 from '/assets/3.png';
import heroImage2 from '/assets/5.png';

function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev === 0 ? 1 : 0));
    }, 7000); // Change every 7 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="hero">
      <p>
        YOU CAN NEVER KNOW YOUR LIMITS IF YOU'RE OVERTHINKING INSTEAD OF TRYING.
        <br />
        <br />- RAMI ARIDE
      </p>
      <div className="hero-overlay">
        <img
          src={heroImage1}
          alt="Hero 1"
          className={`hero-image ${currentImage === 0 ? 'visible' : 'hidden'}`}
        />
        <img
          src={heroImage2}
          alt="Hero 2"
          className={`hero-image ${currentImage === 1 ? 'visible' : 'hidden'}`}
        />
      </div>
    </section>
  );
}

export default HeroSection;
