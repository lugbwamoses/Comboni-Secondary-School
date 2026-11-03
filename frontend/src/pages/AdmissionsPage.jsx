import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import { BookOpen, Calendar, Users } from '../components/Icons.jsx';
import { useSite } from '../context/SiteContext.jsx';
import './AdmissionsPage.css';

const AdmissionsPage = () => {
  const { data } = useSite();
  const { schoolProfile } = data;

  return (
    <div className="page-wrapper admissions-page">
      <Breadcrumbs items={[{ label: 'Admissions' }]} />

      <section className="page-header-banner" aria-labelledby="admissions-title">
        <div className="container">
          <span className="banner-subtitle">ADMISSIONS INFORMATION</span>
          <h1 id="admissions-title" className="banner-title">Joining St. Daniel Comboni</h1>
          <p className="banner-lead">
            The school’s current application dates, entry requirements, and fees should be confirmed directly with the school.
          </p>
        </div>
      </section>

      <div className="container admissions-content-layout">
        <section className="admissions-step-section" aria-labelledby="classes-title">
          <header className="section-head text-center">
            <span className="section-eyebrow">SCHOOL CLASSES</span>
            <h2 id="classes-title" className="section-heading">Senior 1 to Senior 4</h2>
            <p className="section-lead">The school enrolls {schoolProfile.annualEnrollment} across these classes.</p>
          </header>

          <div className="admission-steps-grid">
            {schoolProfile.classes.map((schoolClass) => (
              <article key={schoolClass.id} className="step-card">
                <span className="step-number"><BookOpen size={20} aria-hidden="true" /></span>
                <h3 className="step-title">{schoolClass.title}</h3>
                <p className="step-desc">Streams {schoolClass.streams}.</p>
                <p className="step-desc">{schoolClass.students}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="requirements-section" aria-labelledby="calendar-title">
          <article className="req-card">
            <span className="req-level-tag"><Calendar size={14} aria-hidden="true" /> ACADEMIC CALENDAR</span>
            <h2 id="calendar-title">School Year</h2>
            <p>{schoolProfile.academicYear}</p>
            <p>Opening and closing dates are announced in line with the annual government calendar.</p>
          </article>
          <article className="req-card">
            <span className="req-level-tag"><Users size={14} aria-hidden="true" /> CONTACT THE SCHOOL</span>
            <h2>Application Details</h2>
            <p>Application dates, entry requirements, tuition, and fees have not been provided on this website. Please contact the school for current information.</p>
            <Link to="/contact" className="btn-primary">Contact the School</Link>
          </article>
        </section>
      </div>
    </div>
  );
};

export default AdmissionsPage;
