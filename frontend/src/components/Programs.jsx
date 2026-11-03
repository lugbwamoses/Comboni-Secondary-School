import React from 'react';
import './Programs.css';

const programmes = [
  { title: 'Science', description: 'Comprehensive science curriculum with labs and research opportunities.' },
  { title: 'Arts', description: 'Creative arts, music, and drama fostering talent and expression.' },
  { title: 'Commerce', description: 'Business studies, accounting, and entrepreneurship.' },
  { title: 'Technology', description: 'IT, robotics, and modern tech skills.' },
];

const Programs = () => {
  return (
    <section className="programs-section">
      <h2 className="section-title">Academic Programmes</h2>
      <div className="programs-grid">
        {programmes.map((p) => (
          <div key={p.title} className="program-card">
            <h3 className="program-title">{p.title}</h3>
            <p className="program-desc">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;
