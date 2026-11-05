import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import { ArrowRight } from '../components/Icons.jsx';
import { useSite } from '../context/SiteContext.jsx';
import './ProgrammesPage.css';

const ProgrammeDetailPage = () => {
  const { slug } = useParams();
  const { data } = useSite();
  const { programmes } = data;

  const programme = programmes.find((p) => p.slug === slug);

  if (!programme) {
    return <Navigate to="/programmes" replace />;
  }

  return (
    <div className="page-wrapper programme-detail-page">
      <Breadcrumbs 
        items={[
          { label: 'Academic Programmes', link: '/programmes' },
          { label: programme.name }
        ]} 
      />

      {/* Header Banner */}
      <section className="page-header-banner" aria-labelledby="prog-detail-title">
        <div className="container">
          <div className="badge-row">
            <span className="banner-subtitle">{programme.code}</span>
            <span className="level-badge">{programme.level}</span>
          </div>
          <h1 id="prog-detail-title" className="banner-title">{programme.name}</h1>
          <p className="banner-lead">
            {programme.faculty} &bull; {programme.department}
          </p>
        </div>
      </section>

      <div className="container programme-detail-layout">
        
        {/* Main Details Body */}
        <main className="detail-main-content">
          {/* Section: Overview */}
          <section className="detail-block">
            <h2>Class Overview</h2>
            <p>{programme.overview}</p>
          </section>

          {/* Section: Curriculum Summary */}
          <section className="detail-block">
            <h2>Streams and Enrollment</h2>
            <p>{programme.curriculumSummary}</p>
          </section>

          {/* Section: Requirements */}
          <section className="detail-block">
            <h2>Admissions</h2>
            <p>New student admissions are for Senior One only. The school does not offer vacancies in upper classes. See the Admissions page for application instructions.</p>
          </section>
        </main>

        {/* Sidebar Info Card */}
        <aside className="detail-sidebar">
          <div className="summary-card">
            <h3>Quick Summary</h3>
            <dl className="summary-list">
              <div>
                <dt>Class Code:</dt>
                <dd>{programme.code}</dd>
              </div>
              <div>
                <dt>Level:</dt>
                <dd>{programme.level}</dd>
              </div>
              <div>
                <dt>Duration:</dt>
                <dd>{programme.duration}</dd>
              </div>
              <div>
                <dt>School:</dt>
                <dd>{programme.faculty}</dd>
              </div>
              <div>
                <dt>Streams:</dt>
                <dd>{programme.department}</dd>
              </div>
            </dl>

            <div className="summary-ctas">
              <Link to="/admissions" className="btn-summary-apply">
                Admissions Information &rarr;
              </Link>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
};

export default ProgrammeDetailPage;

