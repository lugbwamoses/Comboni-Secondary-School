import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, ArrowRight } from './Icons.jsx';
import { useSite } from '../context/SiteContext.jsx';
import './EventsSection.css';

const EventsSection = () => {
  const { data } = useSite();
  const events = data.events.slice(0, 3);

  return (
    <section id="events" className="events-section" aria-labelledby="events-heading">
      <div className="container">
        <header className="events-header text-center">
          <span className="section-eyebrow">SCHOOL CALENDAR</span>
          <h2 id="events-heading" className="section-heading">Academic and Co-curricular Activities</h2>
          <p className="events-lead">
            Cultural Day is held on 14 August and Comboni Day on 10 October. Opening and closing dates follow the annual government calendar.
          </p>
        </header>

        <div className="events-grid">
          {events.map((ev) => (
            <article key={ev.id} className="event-card">
              <div className="event-calendar-badge">
                <span className="calendar-day">{ev.day}</span>
                <span className="calendar-month">{ev.month}</span>
              </div>

              <div className="event-details">
                <div className="event-meta-info">
                  <span className="meta-item">
                    <Clock size={14} aria-hidden="true" /> {ev.time}
                  </span>
                  <span className="meta-item">
                    <MapPin size={14} aria-hidden="true" /> {ev.location}
                  </span>
                </div>

                <h3 className="event-title">{ev.title}</h3>
                <p className="event-summary">{ev.description}</p>

                <footer className="event-action">
                  <Link to={`/events/${ev.slug}`} className="event-link">
                    Event Details <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </footer>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;

