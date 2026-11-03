import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import { Award, BookOpen, CheckCircle2 } from '../components/Icons.jsx';
import { useSite } from '../context/SiteContext.jsx';
import './AboutPage.css';

const AboutPage = () => {
  const { data } = useSite();
  const { schoolProfile } = data;

  return (
    <div className="page-wrapper about-page">
      <Breadcrumbs items={[{ label: 'About Us' }]} />

      {/* Hero Banner */}
      <section className="page-header-banner" aria-labelledby="about-page-title">
        <div className="container">
          <span className="banner-subtitle">INSTITUTIONAL PROFILE</span>
          <h1 id="about-page-title" className="banner-title">About St. Daniel Comboni Secondary School</h1>
          <p className="banner-lead">
              A Catholic Archdiocese of Juba school established in 1981 to support academic and vocational learning and the Church’s evangelization work.
          </p>
        </div>
      </section>

      {/* Main Content with Sub-Navigation */}
      <div className="container about-main-layout">
        <aside className="about-sidebar">
          <nav className="about-subnav" aria-label="About page sub-navigation">
            <h3 className="subnav-title">About Sections</h3>
            <ul role="list">
              <li><a href="#overview" className="active">School Overview</a></li>
              <li><a href="#history">Founding &amp; History</a></li>
              <li><a href="#mission">Vision, Mission &amp; Values</a></li>
              <li><a href="#leadership">Leadership &amp; Governance</a></li>
              <li><a href="#school-year">Academic Year &amp; Classes</a></li>
            </ul>
          </nav>

          <div className="sidebar-cta-card">
            <h4>Meet Our Leaders</h4>
            <p>Learn about the school patron, Archdiocesan supervisor, and school administration.</p>
            <Link to="/about/leadership" className="btn-sidebar-link">
              View Leadership Directory &rarr;
            </Link>
          </div>
        </aside>

        <main className="about-article-body">
          {/* Section 1: Overview */}
          <section id="overview" className="about-block">
            <span className="block-tag">OVERVIEW</span>
            <h2>A Catholic Archdiocese of Juba School</h2>
            <p>
              St. Daniel Comboni Secondary School is a Catholic Archdiocese of Juba institution of learning. It serves students through formal and informal education, academic and vocational skills, and personal formation.
            </p>
            <p>
              The school’s aim is {schoolProfile.aim}
            </p>

          </section>

          {/* Section 2: History */}
          <section id="history" className="about-block">
            <span className="block-tag">HERITAGE</span>
            <h2>Our Founding &amp; Historical Legacy</h2>
            <p>
              {schoolProfile.history}
            </p>
          </section>

          {/* Section 3: Vision, Mission & Values */}
          <section id="mission" className="about-block">
            <span className="block-tag">ETHOS</span>
            <h2>Vision, Mission &amp; Core Values</h2>

            <div className="vision-mission-grid">
              <div className="vm-card">
                <div className="vm-icon"><Award size={24} /></div>
                <h3>Our Vision</h3>
                <p>
                  {schoolProfile.vision}
                </p>
              </div>

              <div className="vm-card">
                <div className="vm-icon"><BookOpen size={24} /></div>
                <h3>Our Mission</h3>
                <p>
                  {schoolProfile.mission}
                </p>
              </div>
            </div>

            <h3 className="values-heading">Our Core Values</h3>
            <ul className="values-grid" role="list">
              {schoolProfile.coreValues.map((value) => (
                <li className="value-card" key={value}><h4>{value}</h4></li>
              ))}
            </ul>
          </section>

          {/* Section 4: Leadership & Governance */}
          <section id="leadership" className="about-block">
            <span className="block-tag">GOVERNANCE</span>
            <h2>School Governance</h2>
            <p>
              The school is under the administration of the Catholic Archdiocese of Juba. Its patron is {schoolProfile.patron}. Supervision is provided by {schoolProfile.educationCoordinator}, the Archdiocese’s Education Coordinator.
            </p>
            <div className="governance-highlights">
              <div className="gov-item">
                <CheckCircle2 size={18} className="gov-check" />
                <span><strong>Headmaster:</strong> Ustaz Emmanuel Lado Zacharia, a Comboni alumnus.</span>
              </div>
              <div className="gov-item">
                <CheckCircle2 size={18} className="gov-check" />
                <span><strong>Deputy Headmaster:</strong> Rev. Fr. Alfred Loro.</span>
              </div>
              <div className="gov-item">
                <CheckCircle2 size={18} className="gov-check" />
                <span><strong>School Officer:</strong> Ustaz Isaac Abuni Joseph, a Comboni alumnus. <strong>School Secretary:</strong> Ustaz David Lubajo, a Comboni alumnus. <strong>Bursar:</strong> Ustaz Rexon Surur.</span>
              </div>
            </div>
          </section>

          <section id="school-year" className="about-block">
            <span className="block-tag">SCHOOL YEAR</span>
            <h2>Academic Year &amp; Classes</h2>
            <p>{schoolProfile.academicYear}</p>
            <p>The school enrolls {schoolProfile.annualEnrollment}.</p>
            <div className="values-grid enrollment-grid">
              {schoolProfile.classes.map((schoolClass) => (
                <article className="value-card" key={schoolClass.id}>
                  <h3>{schoolClass.title}</h3>
                  <p><strong>Streams:</strong> {schoolClass.streams}</p>
                  <p><strong>Enrollment:</strong> {schoolClass.students}</p>
                </article>
              ))}
            </div>
            <h3 className="values-heading">Annual School Events</h3>
            <ul className="strategic-list" role="list">
              {schoolProfile.events.map((event) => (
                <li key={event.id}><strong>{event.title}:</strong> {event.day === 'TBC' ? 'Date to be announced' : `${event.day} ${event.month}`}</li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AboutPage;

