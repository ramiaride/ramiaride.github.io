import React, { useEffect, useRef, useState } from "react";
import './styles/About.css';

function About() {
    const aboutRef = useRef(null);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimate(true);
                    observer.disconnect(); // stop observing once animated
                }
            },
            { threshold: 0.3 } // triggers when 30% is visible
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={aboutRef} className={`About-main ${animate ? 'animate' : ''}`}>

            {/* Floating blobs */}
            <div className="blob blob1"></div>
            <div className="blob blob2"></div>

            {/* Geometric shapes */}
            <div className="shape shape1"></div>
            <div className="shape shape2"></div>

            {/* Dots and lines */}
            <div className="decorative-dot dot1"></div>
            <div className="decorative-dot dot2"></div>
            <div className="decorative-line line1"></div>
            <div className="decorative-line line2"></div>

            <div className="About-content">
                <h1 className="About-title">ABOUT</h1>
                <p className="content-par">
                    Rami Aride, a junior designer with BA in interior and product design, has made many concepts for some projects that are related to all Product, Interior and Graphic design. Can work both individually and with a group, passionate and always seeking improvement, fast learner and self taught. Rami’s most important aim is problem solving as some of his projects are focused on serious problems that need a solution. 
                </p>
            </div>
        </div>
    );
}

export default About;
