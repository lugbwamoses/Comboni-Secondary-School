import React from 'react';
import { useSite } from '../context/SiteContext.jsx';
import './FacultySection.css';

const FacultySection = () => {
  const { data } = useSite();
  const staffing = data.schoolProfile.staffing;

  return (
    <section id="faculty" className="faculty-section" aria-labelledby="faculty-heading">
      <div className="container">
        <header className="faculty-header text-center">
          <span className="section-eyebrow">SCHOOL COMMUNITY</span>
          <h2 id="faculty-heading" className="section-heading">Our Staff</h2>
          <p className="faculty-lead">
            Teaching and support staff contribute to the school’s academic and co-curricular life.
          </p>
        </header>

        <div className="faculty-grid">
          {staffing.map((group) => (
            <article key={group.title} className="teacher-card">
              <div className="teacher-info">
                <h3 className="teacher-name">{group.title}</h3>
                <p className="teacher-subject">{group.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultySection;

