import React from 'react';
import './Faculty.css';

const faculties = [
  { name: 'Science Faculty', description: 'Physics, Chemistry, Biology labs and research.' },
  { name: 'Arts Faculty', description: 'Visual arts, music, drama and literature.' },
  { name: 'Commerce Faculty', description: 'Business, economics, accounting.' },
  { name: 'Technology Faculty', description: 'IT, robotics, engineering.' },
];

const Faculty = () => (
  <section className="faculty-section">
    <h2 className="faculty-title">Our Faculties</h2>
    <div className="faculty-grid">
      {faculties.map(f => (
        <div key={f.name} className="faculty-card">
          <h3 className="faculty-card-title">{f.name}</h3>
          <p className="faculty-card-text">{f.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Faculty;
