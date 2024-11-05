// src/components/Teams.js
import React from 'react';
import './Teams.css';

const Teams = () => {
  const teams = [
    {
      name: 'Red Warriors',
      members: 15,
      description: 'A competitive team focused on soccer and basketball.',
      animation: 'fade-right',
      delay: 100,
    },
    {
      name: 'Blue Knights',
      members: 12,
      description: 'Dedicated to volleyball and community events.',
      animation: 'fade-right',
      delay: 200,
    },
    {
      name: 'Green Giants',
      members: 18,
      description: 'Passionate about baseball and fitness activities.',
      animation: 'fade-right',
      delay: 300,
    },
  ];

  return (
    <section className="teams">
      <h2 data-aos="fade-down">Our Teams</h2>
      <div className="teams-list">
        {teams.map((team, index) => (
          <div
            key={index}
            className="team-item"
            data-aos={team.animation}
            data-aos-delay={team.delay}
          >
            <h3>{team.name}</h3>
            <p className="team-members">Members: {team.members}</p>
            <p>{team.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Teams;