// src/components/Header.js
import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import soccerBall from '../assets/soccer-ball.svg'; // SVG 파일 임포트

const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // 모바일 드롭다운 상태

  const handleMouseEnter = () => {
    setDropdown(true);
  };

  const handleMouseLeave = () => {
    setDropdown(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header" data-aos="fade-down"> {/* AOS 애니메이션 추가 */}
      <div className="logo">
        <Link to="/" className="logo-link"> {/* 로고와 텍스트를 클릭 가능하게 */}
          <img src={soccerBall} alt="Spornity Logo" className="logo-svg" />
          <span className="logo-text">Spornity</span>
        </Link>
      </div>
      <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" data-aos="fade-right" data-aos-delay="100">Home</Link></li>
          <li
            className={`dropdown ${isDropdownOpen ? 'open' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={toggleDropdown} // 모바일 클릭 시 드롭다운 토글
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <span>More</span>
            {(dropdown || isDropdownOpen) && (
              <ul className="dropdown-menu" data-aos="fade-down" data-aos-delay="300">
                <li><Link to="/teams">Teams</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/community">Community</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/about" data-aos="fade-right" data-aos-delay="300">About</Link></li>
        </ul>
      </nav>
      <div 
        className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`} 
        onClick={toggleMobileMenu} 
        data-aos="fade-right" 
        data-aos-delay="400"
        aria-label="Toggle navigation menu"
        aria-expanded={isMobileMenuOpen}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
};

export default Header;
