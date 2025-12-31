import React, { useEffect, useRef, useState } from "react";
import './styles/ProjectSection.css';
import shavingmachine from '/assets/SHAVING MACHINE.png';
import smallsf from '/assets/SMALL SF.png';
import torredivina from '/assets/Artboard 1.png';
import { useNavigate } from 'react-router-dom';

function ProjectSection() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

function mynav() {
  console.log('rafat');
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Optional smooth scroll
  navigate('/ProductDesign');

}

  return (
    <div className="blocks-main" ref={sectionRef} onClick={() => mynav2()} >
      <div className="block block-1" onClick={() => mynav()}>
        <h1 className="Product-design">PRODUCT DESIGN</h1>
        <img
          src={shavingmachine}
          className={`product-img ${inView ? 'animate-img' : ''}`}
          alt="Product Design"
        />
      </div>

      <div className="right-side">
        <div className="block block-2" onClick={() => navigate('/InteriorDesign')}>
          <h1 className="Interior-design">INTERIOR DESIGN</h1>
          <img
            src={smallsf}
            className={`interior-img ${inView ? 'animate-img' : ''}`}
            alt="Interior Design"
          />
        </div>

        <div className="block block-3" onClick={() => navigate('/GraphicDesign')}>
          <h1 className="Graphic-design">GRAPHIC DESIGN</h1>
          <img
            src={torredivina}
            className={`graphic-img ${inView ? 'animate-img' : ''}`}
            alt="Graphic Design"
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
