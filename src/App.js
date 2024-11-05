// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import HealthFitnessPlatform from './pages/HealthFitnessPlatform';
import AccessibilityPlatform from './pages/AccessibilityPlatform';
import DataVisualizationDashboard from './pages/DataVisualizationDashboard';
import ProgramMatchingService from './pages/ProgramMatchingService';
import About from './pages/About';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/health-fitness" element={<HealthFitnessPlatform />} />
        <Route path="/accessibility" element={<AccessibilityPlatform />} />
        <Route path="/data-visualization" element={<DataVisualizationDashboard />} />
        <Route path="/program-matching" element={<ProgramMatchingService />} />
        <Route path="/about" element={<About />} />
        {/* 추가적인 라우트 */}
      </Routes>
    </Router>
  );
};

export default App;
