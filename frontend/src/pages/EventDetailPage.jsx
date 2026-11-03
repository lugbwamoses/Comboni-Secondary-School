import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import { Calendar, Clock, MapPin, Users } from '../components/Icons.jsx';
import { useSite } from '../context/SiteContext.jsx';

const EventDetailPage = () => {
  const { slug } = useParams();
  const { data } = useSite();
  const event = data.events.find((item) => item.slug === slug);

  if (!event) return <Navigate to="/events" replace />;


  return (
    <div className="page-wrapper event-detail-page">
      <Breadcrumbs items={[{ label: 'Events', link: '/events' }, { label: event.title }]} />
      <article className="container event-detail-content section-pad">
        <header className="event-detail-header">
          <span className="section-eyebrow">SCHOOL EVENT</span>
          <h1 className="section-heading">{event.title}</h1>
          <div className="event-meta-info">
            <span><Calendar size={16} /> {event.day === 'TBC' ? 'Date to be announced' : `${event.day} ${event.month} · ${event.year}`}</span>
            <span><Clock size={16} /> {event.time}</span>
            <span><MapPin size={16} /> {event.location}</span>
          </div>
        </header>
        {event.image && <img src={event.image} alt={event.title} className="event-detail-image" loading="lazy" />}
        <div className="event-detail-copy">
          <p>{event.description}</p>
          {event.organizer && <p><Users size={16} aria-hidden="true" /> Organized by {event.organizer}</p>}
          <Link to="/events" className="btn-outline">Back to all events</Link>
        </div>
      </article>
    </div>
  );
};

export default EventDetailPage;
