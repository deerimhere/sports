// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" data-aos="fade-up">
      <p>&copy; {new Date().getFullYear()} Spornity. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
