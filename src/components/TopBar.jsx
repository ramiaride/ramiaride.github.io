// src/components/Topbar.jsx
import './styles/TopBar.css';
import logo from '/assets/logo.png';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Dropdown, DropdownItem } from "flowbite-react";

function Topbar() {
  const navigate = useNavigate();
  const location = useLocation(); // track current route
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleNavigate = (path) => {
    navigate(path);setIsOpen(false);
    // No need to setIsOpen(false) here, useEffect handles it
    
  };

  return (
    <div className="topbar">
      <div className="logo" onClick={() => handleNavigate('/')}>
        <img className="logo-img" src={logo} alt="Logo" />
      </div>

    
        <Dropdown label='MENU' dismissOnClick={true}>
          <DropdownItem as="button" onClick={() => handleNavigate('/')}>HOME</DropdownItem>
          <DropdownItem onClick={() => handleNavigate('/productdesign')}>PRODUCT DESIGN</DropdownItem>
          <DropdownItem onClick={() => handleNavigate('/interiordesign')}>INTERIOR DESIGN</DropdownItem>
          <DropdownItem onClick={() => handleNavigate('/graphicdesign')}>GRAPHIC DESIGN</DropdownItem>
        </Dropdown>
    </div>
  );
}

export default Topbar;
 /*<div className="dropdown">
        <button className="dropbtn" onClick={() => setIsOpen(!isOpen)}>
          MENU
        </button>

        <div className={`dropdown-content ${isOpen ? 'show' : ''}`}>
          <a onClick={() => handleNavigate('/')}>HOME</a>
          <a onClick={() => handleNavigate('/productdesign')}>PRODUCT DESIGN</a>
          <a onClick={() => handleNavigate('/interiordesign')}>INTERIOR DESIGN</a>
          <a onClick={() => handleNavigate('/graphicdesign')}>GRAPHIC DESIGN</a>
        </div>
      </div>*/