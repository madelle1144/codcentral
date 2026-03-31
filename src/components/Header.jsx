import React, { useState } from 'react';

const BASE = import.meta.env.BASE_URL;

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setPagesOpen(false);
  };

  const handleNavLink = (e) => {
    if (window.innerWidth <= 768) {
      closeMenu();
    }
  };

  const handlePagesClick = (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      e.stopPropagation();
      setPagesOpen(o => !o);
    }
  };

  const handleDropdownLink = () => {
    closeMenu();
  };

  return (
    <header className={menuOpen ? 'mobile-menu-active' : ''}>
      <div className="container header-content">
        <div className="logo">
          <img src={`${BASE}images/logo.png`} alt="CodCentral Logo" />
        </div>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle navigation"
        >
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>

        <nav>
          <ul>
            <li><a href="#home" onClick={handleNavLink}>Home</a></li>
            <li><a href="#services" onClick={handleNavLink}>Services</a></li>
            <li><a href="#portfolio" onClick={handleNavLink}>Portfolio</a></li>
            <li className={`dropdown${pagesOpen ? ' active' : ''}`}>
              <a href="#pages" onClick={handlePagesClick}>
                Pages <i className="fa-solid fa-caret-down"></i>
              </a>
              <div className="dropdown-menu">
                <ul className="dropdown-menu">
                  <li><a href="#about" onClick={handleDropdownLink}>About Us</a></li>
                  <li><a href="#case-study" onClick={handleDropdownLink}>Case Study</a></li>
                  <li><a href="#team" onClick={handleDropdownLink}>Team</a></li>
                  <li><a href="#pricing" onClick={handleDropdownLink}>Plans</a></li>
                  <li><a href="#faqs" onClick={handleDropdownLink}>FAQs</a></li>
                </ul>
              </div>
            </li>
            <li><a href="#contactUs" onClick={handleNavLink}>Contact Us</a></li>
            <li><a href="#testimonials" onClick={handleNavLink}>Testimonials</a></li>
          </ul>
        </nav>

        <div className="btn">
          <a href="#quote">Make Your Quote</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
