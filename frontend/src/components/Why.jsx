import React from 'react';
import './Why.css';

const reasons = [
  {
    title: 'Academic Excellence',
    icon: '📚',
    description: 'Rigorous curriculum with experienced teachers fostering critical thinking.',
  },
  {
    title: 'Moral Values',
    icon: '🤝',
    description: 'Strong emphasis on ethics, community service, and personal growth.',
  },
  {
    title: 'Modern Facilities',
    icon: '🏫',
    description: 'Well‑equipped classrooms, labs, and sports areas for holistic development.',
  },
];

const Why = () => {
  return (
    <section className="why-section">
      <h2 className="why-title">Why Choose St. Daniel Comboni?</h2>
      <div className="why-cards">
        {reasons.map((r) => (
          <div key={r.title} className="why-card">
            <div className="why-icon" aria-hidden="true">{r.icon}</div>
            <h3 className="why-card-title">{r.title}</h3>
            <p className="why-card-text">{r.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Why;
