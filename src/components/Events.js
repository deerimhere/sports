// src/components/Events.js
import React from 'react';
import './Events.css';

const Events = () => {
  const events = [
    {
      title: 'Annual Soccer Tournament',
      date: 'June 15, 2024',
      description: 'Join us for our annual soccer tournament featuring teams from all over the region.',
      animation: 'fade-up',
      delay: 100,
    },
    {
      title: 'Community Fitness Bootcamp',
      date: 'July 20, 2024',
      description: 'A free fitness bootcamp open to all community members.',
      animation: 'fade-up',
      delay: 200,
    },
    {
      title: 'Charity Basketball Game',
      date: 'August 10, 2024',
      description: 'Support local charities by participating in our charity basketball game.',
      animation: 'fade-up',
      delay: 300,
    },
  ];

  return (
    <section className="events">
      <h2 data-aos="fade-down">Upcoming Events</h2>
      <div className="events-list">
        {events.map((event, index) => (
          <div
            key={index}
            className="event-item"
            data-aos={event.animation}
            data-aos-delay={event.delay}
          >
            <h3>{event.title}</h3>
            <p className="event-date">{event.date}</p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
