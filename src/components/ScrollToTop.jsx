import './styles/TopBar.css';
import logo from '/assets/logo.png';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Dropdown } from 'flowbite-react';

function Topbar() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Optional: scroll to top on navigation
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="topbar">
      <div className="logo" onClick={() => handleNavigate('/')}>
        <img className="logo-img" src={logo} alt="Logo" />
      </div>

      <Dropdown
        label="MENU"
        dismissOnClick={true}
        inline
        className="modern-dropdown"
      >
        <Dropdown.Item onClick={() => handleNavigate('/')}>
          HOME
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleNavigate('/productdesign')}>
          PRODUCT DESIGN
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleNavigate('/interiordesign')}>
          INTERIOR DESIGN
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleNavigate('/graphicdesign')}>
          GRAPHIC DESIGN
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
}

export default Topbar;
