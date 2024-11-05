// src/components/Community.js
import React from 'react';
import './Community.css';

const Community = () => {
  const initiatives = [
    {
      title: 'Community Outreach',
      description: 'Engaging with local schools and organizations to promote sports and wellness.',
      animation: 'fade-left',
      delay: 100,
    },
    {
      title: 'Volunteer Programs',
      description: 'Organizing volunteers for event management and community support.',
      animation: 'fade-left',
      delay: 200,
    },
    {
      title: 'Youth Development',
      description: 'Providing training and resources for youth to excel in sports.',
      animation: 'fade-left',
      delay: 300,
    },
  ];

  return (
    <section className="community">
      <h2 data-aos="fade-down">Community Initiatives</h2>
      <div className="initiatives-list">
        {initiatives.map((initiative, index) => (
          <div
            key={index}
            className="initiative-item"
            data-aos={initiative.animation}
            data-aos-delay={initiative.delay}
          >
            <h3>{initiative.title}</h3>
            <p>{initiative.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Community;
