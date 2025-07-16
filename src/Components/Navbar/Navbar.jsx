import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuClick = (menuName) => {
    setMenu(menuName);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className='Navbar'>
      <div className="navbar-left">
        <Link to="/">
          <img src="/logo1.png" alt="Logo" className="navbar-logo" />
        </Link>
      </div>

     

      <ul className={`navbar-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <Link to='/' onClick={() => handleMenuClick("Home")} className={menu === "Home" ? "active" : ""}>Home</Link>
        <Link to='/images' onClick={() => handleMenuClick("Images")} className={menu === "Images" ? "active" : ""}>Gallery</Link>
        <Link to='/services' onClick={() => handleMenuClick("Services")} className={menu === "Services" ? "active" : ""}>Services</Link>
        <Link to='/about' onClick={() => handleMenuClick("About")} className={menu === "About" ? "active" : ""}>About</Link>
        <Link to='/contact' onClick={() => handleMenuClick("Contact Us")} className={menu === "Contact Us" ? "active" : ""}>Contact Us</Link>
        
      </ul>

      <div className="navbar-hamburger" onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
  
    </div>
  );
};

export default Navbar;
