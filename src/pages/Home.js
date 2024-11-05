// src/components/Home.js
import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Feature from './Feature';

const Home = () => {
  const features = [
    {
      title: 'Variety of Sports',
      description: 'Enjoy a wide range of sports activities like soccer, basketball, volleyball, and more.',
      details: 'Detailed information about various sports activities.',
      animation: 'fade-up',
      delay: 100,
    },
    {
      title: 'Community Engagement',
      description: 'Connect and interact with people who share the same interests.',
      details: 'Detailed information about community engagement.',
      animation: 'fade-up',
      delay: 200,
    },
    {
      title: 'Events and Tournaments',
      description: 'Participate in regularly held events and tournaments.',
      details: 'Detailed information about events and tournaments.',
      animation: 'fade-up',
      delay: 300,
    },
  ];

  return (
    <main className="home">
      <section className="hero" data-aos="fade-up">
        <h2>Welcome to Spornity</h2>
        <p>Experience a blend of sports and community.</p>
        <Link to="/events"><button>Join Events</button></Link>
      </section>
      
      <section className="features">
        {features.map((feature, index) => (
          <Feature
            key={index}
            title={feature.title}
            description={feature.description}
            details={feature.details}
            animation={feature.animation}
            delay={feature.delay}
          />
        ))}
      </section>
    </main>
  );
};

export default Home;
