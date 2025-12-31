import React from "react";
import './styles/BottomMobile.css';

function BottomMobile() {
  return (
    <div className="bottom-mobile-container">
      <h2 className="bottom-heading">CONTACT</h2>

      <div className="contact-section">
        <p className="contact-label">Email</p>
        <a  className="contact-link">
          ramiaride@gmail.com
        </a>
      </div>

      <div className="contact-section">
        <p className="contact-label">Phone</p>
        <p className="contact-link">+39 331 788 9359</p>
        <p className="contact-sub">Phone</p>
      </div>

      <div className="contact-section">
        <p className="contact-link">+972 54 540 8049</p>
        <p className="contact-sub">WhatsApp</p>
      </div>

      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/rami-aride-28ab43355/"
          className="social-button linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        <a
          href="https://www.instagram.com/ramides12n/"
          className="social-button instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </div>
    </div>
  );
}

export default BottomMobile;
