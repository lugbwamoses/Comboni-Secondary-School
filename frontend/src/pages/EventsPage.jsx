import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import { Calendar, Clock, MapPin, ArrowRight } from '../components/Icons.jsx';
import { useSite } from '../context/SiteContext.jsx';
import './EventsPage.css';

const EventsPage = () => {
  const { data } = useSite();
  const { events } = data;
  const [activeTab, setActiveTab] = useState('upcoming');
  return (
    <div className="page-wrapper events-page">
      <Breadcrumbs items={[{ label: 'Events & Calendar' }]} />

      <section className="page-header-banner" aria-labelledby="events-title">
        <div className="container">
          <span className="banner-subtitle">SCHOOL CALENDAR</span>
          <h1 id="events-title" className="banner-title">School Events &amp; Activities</h1>
            <p className="banner-lead">
            The academic calendar is based on the government calendar issued each year. Opening and closing dates are announced in line with that calendar.
          </p>
        </div>
      </section>

      <div className="container events-container">
        
        {/* View Toggles */}
        <div className="events-toggle-bar">
          <div className="toggle-tabs" role="tablist">
            <button
              type="button"
              className={`toggle-tab ${activeTab === 'upcoming' ? 'active' : ''}`}
              onClick={() => setActiveTab('upcoming')}
              role="tab"
              aria-selected={activeTab === 'upcoming'}
            >
              Upcoming Events ({events.length})
            </button>
            <button
              type="button"
              className={`toggle-tab ${activeTab === 'past' ? 'active' : ''}`}
              onClick={() => setActiveTab('past')}
              role="tab"
              aria-selected={activeTab === 'past'}
            >
              Archived / Past Events
            </button>
          </div>
        </div>

        {/* Events Grid */}
        {activeTab === 'upcoming' ? (
          <div className="events-cards-grid">
            {events.length === 0 && <p className="text-muted">No events have been published yet.</p>}
            {events.map((ev) => (
              <article key={ev.id} className="event-full-card">
                <figure className={`event-figure ${ev.image ? '' : 'event-no-image'}`}>
                  {ev.image && <img src={ev.image} alt={ev.title} className="event-img" loading="lazy" />}
                  <div className="event-calendar-stamp">
                    <span className="stamp-day">{ev.day}</span>
                    <span className="stamp-month">{ev.month}</span>
                  </div>
                </figure>

                <div className="event-body-box">
                  <div className="event-meta-row">
                    <span><Clock size={14} /> {ev.time}</span>
                    <span><MapPin size={14} /> {ev.location}</span>
                  </div>

                  <h2 className="event-card-title">{ev.title}</h2>
                  {ev.organizer && <span className="event-organizer"><strong>Organized by:</strong> {ev.organizer}</span>}
                  <p className="event-description">{ev.description}</p>

                  <footer className="event-card-footer">
                    <Link to={`/events/${ev.slug}`} className="btn-register-event">
                      <span>View Event Details</span>
                      <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </footer>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="past-events-placeholder">
            <Calendar size={40} className="empty-cal-icon" />
            <h3>No past events published</h3>
            <p>Past events will appear here when verified information is added.</p>
          </div>
        )}

      </div>

    </div>
  );
};

export default EventsPage;

