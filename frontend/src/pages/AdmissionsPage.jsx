import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import { Calendar } from '../components/Icons.jsx';
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
            New admissions are for Senior One only. Submit an application letter as soon as Primary Leaving Certificate results are announced.
          </p>
        </div>
      </section>

      <div className="container admissions-content-layout">
        <section className="admissions-step-section" aria-labelledby="process-title">
          <header className="section-head text-center">
            <span className="section-eyebrow">SENIOR ONE ADMISSIONS</span>
            <h2 id="process-title" className="section-heading">How to Apply</h2>
            <p className="section-lead">The school accepts new students into Senior One (Senior 1) only. There are no vacancies for admission into Senior Two, Senior Three, or Senior Four.</p>
          </header>

          <div className="admission-steps-grid">
            <article className="step-card">
              <span className="step-number" aria-hidden="true">01</span>
              <h3 className="step-title">Write an application letter</h3>
              <p className="step-desc">Write to the school requesting a vacancy for the candidate in Senior One.</p>
            </article>
            <article className="step-card">
              <span className="step-number" aria-hidden="true">02</span>
              <h3 className="step-title">Submit it to the school office</h3>
              <p className="step-desc">Hand the application letter to the School Officer or the Headmaster.</p>
            </article>
            <article className="step-card">
              <span className="step-number" aria-hidden="true">03</span>
              <h3 className="step-title">Apply as soon as results are announced</h3>
              <p className="step-desc">Submit the letter immediately after Primary Leaving Certificate results are announced, including when results are announced in churches on Sunday.</p>
            </article>
          </div>
        </section>

        <section className="requirements-section req-grid" aria-label="Admission and school calendar information">
          <article className="req-card">
            <span className="req-level-tag">SENIOR ONE INTAKE</span>
            <h2>Admission is limited to Senior One</h2>
            <p>The school does not admit new students into Senior Two, Senior Three, or Senior Four.</p>
            <p>Contact the school office to confirm any additional requirements, fees, or current information.</p>
            <Link to="/contact" className="btn-primary">Contact the School</Link>
          </article>
          <article className="req-card">
            <span className="req-level-tag"><Calendar size={14} aria-hidden="true" /> ACADEMIC CALENDAR</span>
            <h2>School Year</h2>
            <p>{schoolProfile.academicYear}</p>
            <p>Opening and closing dates are announced in line with the annual government calendar.</p>
          </article>
        </section>
      </div>
    </div>
  );
};

export default AdmissionsPage;
