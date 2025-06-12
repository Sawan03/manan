import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Make sure this includes updated styles for nav toggle

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <header className="app-header">
      <div className="header-container">
        <div className="left-section">
          {/* Logo and Title */}
          <Link to="/" className="logo-link" onClick={() => setNavOpen(false)}>
            <img
              src="https://img.icons8.com/ios-filled/50/1b1b1b/idea-sharing.png"
              alt="Manan Logo"
              className="logo-img"
            />
            <span className="logo-title">Manan Demo</span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className={`nav-toggle ${navOpen ? 'open' : ''}`}
            aria-label="Toggle navigation menu"
            onClick={toggleNav}
          >
            <span />
            <span />
            <span />
          </button>

          {/* Navigation Links */}
          <nav className={`main-nav ${navOpen ? 'nav-open' : ''}`}>
            <Link to="/" onClick={() => setNavOpen(false)}>Home</Link>
            <Link to="/top-stories" onClick={() => setNavOpen(false)}>Top Stories</Link>
            <a href="#" onClick={() => setNavOpen(false)}>Latest Stories</a>
            <Link to="/communities" onClick={() => setNavOpen(false)}>Communities</Link>
             <Link to="/Challenges" onClick={() => setNavOpen(false)}>Challenges</Link>
          
          
            <Link to="/resources" onClick={() => setNavOpen(false)}>Resources</Link>

            {/* Mobile only: join/login/create story buttons */}
            <div className="mobile-actions">
              <Link to="/Join"><button className="btn-outline">Join</button></Link>
             
              
              <Link to="/login"> <button className="btn-outline">Log In</button></Link>
              <Link to="/Login" > <button className="btn-outline">Create Story</button></Link>
             
            </div>
          </nav>
        </div>

        {/* Desktop Right Section */}
        <div className="right-section">
          <div className="search-icon">
            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 19A8 8 0 1 0 11 3a8 8 0 0 0 0 16Zm10 2-4.35-4.35" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <Link to="/Join"><button className="btn-outline">Join</button></Link>
          <Link to="/login"> <button className="btn-outline">Log In</button></Link>
              <Link to="/Login" > <button className="btn-outline">Create Story</button></Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
