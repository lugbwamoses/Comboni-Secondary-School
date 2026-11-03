import React from 'react';
import { useSite } from '../context/SiteContext.jsx';
import './CurriculumSection.css';

const CurriculumSection = () => {
  const { data } = useSite();
  const classes = data.schoolProfile.classes;

  return (
    <section id="programs" className="curriculum-section" aria-labelledby="curriculum-heading">
      <div className="container">
        <header className="curriculum-header text-center">
          <span className="section-eyebrow">ACADEMIC PROGRAMMES</span>
          <h2 id="curriculum-heading" className="section-heading">Classes and Streams</h2>
          <p className="curriculum-lead">
            The school enrolls about 700 students yearly across Senior 1 to Senior 4.
          </p>
        </header>

        <div className="courses-grid">
          {classes.map((schoolClass) => (
            <article key={schoolClass.id} className="course-card">
              <div className="course-body">
                <div className="course-meta-row">
                  <span className="meta-subjects">{schoolClass.streamCount} {schoolClass.streamCount === 1 ? 'stream' : 'streams'}</span>
                  <span className="meta-subjects">{schoolClass.students}</span>
                </div>

                <h3 className="course-title">{schoolClass.title}</h3>
                <p className="course-description">Streams {schoolClass.streams}. {schoolClass.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;

