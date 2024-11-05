// src/App.js
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

const Home = lazy(() => import('./components/Home'));
const Teams = lazy(() => import('./components/Teams'));
const Events = lazy(() => import('./components/Events'));
const Community = lazy(() => import('./components/Community'));
const About = lazy(() => import('./components/About'));

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/events" element={<Events />} />
              <Route path="/community" element={<Community />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
