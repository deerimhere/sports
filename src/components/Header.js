import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import soccerBall from '../assets/soccer-ball.svg';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // 드롭다운 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // 모바일 메뉴 토글
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isDropdownOpen) setIsDropdownOpen(false);
  };

  // 드롭다운 메뉴 토글
  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  // 페이지 이동 처리
  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="logo-link" aria-label="Spornity 홈으로 이동" onClick={() => setIsMobileMenuOpen(false)}>
          <img src={soccerBall} alt="Spornity Logo" className="logo-svg" />
          <span className="logo-text">Spornity</span>
        </Link>
      </div>

      <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" onClick={() => handleNavigation('/')}>Home</Link>
          </li>
          
          <li className="nav-item dropdown" ref={dropdownRef}>
            <button 
              className="dropdown-button"
              onClick={toggleDropdown}
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              More
            </button>
            <ul className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
              <li><Link to="/teams" onClick={() => handleNavigation('/teams')}>Teams</Link></li>
              <li><Link to="/events" onClick={() => handleNavigation('/events')}>Events</Link></li>
              <li><Link to="/community" onClick={() => handleNavigation('/community')}>Community</Link></li>
            </ul>
          </li>
          
          <li className="nav-item">
            <Link to="/about" onClick={() => handleNavigation('/about')}>About</Link>
          </li>
        </ul>
      </nav>

      <button
        className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={toggleMobileMenu}
        aria-label="메인 메뉴 토글"
        aria-expanded={isMobileMenuOpen}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </header>
  );
};

export default Header;