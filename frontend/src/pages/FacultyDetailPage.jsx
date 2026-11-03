import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import { BookOpen, Users, Building, ArrowRight } from '../components/Icons.jsx';
import { useSite } from '../context/SiteContext.jsx';
import './FacultiesPage.css';

const FacultyDetailPage = () => {
  const { slug } = useParams();
  const { data } = useSite();
  const { faculties, departments, programmes } = data;

  const faculty = faculties.find((f) => f.slug === slug);

  if (!faculty) {
    return <Navigate to="/faculties" replace />;
  }

  const relatedDepts = departments.filter((d) => d.faculty === faculty.name);
  const relatedProgs = programmes.filter((p) => p.faculty === faculty.name);

  return (
    <div className="page-wrapper faculty-detail-page">
      <Breadcrumbs 
        items={[
          { label: 'Faculties', link: '/faculties' },
          { label: faculty.name }
        ]} 
      />

      <section className="page-header-banner" aria-labelledby="faculty-heading">
        <div className="container">
          <span className="banner-subtitle">FACULTY PROFILE</span>
          <h1 id="faculty-heading" className="banner-title">{faculty.name}</h1>
          <p className="banner-lead">
            Head of Faculty: {faculty.dean} &bull; {faculty.departmentsCount} Constituent Departments
          </p>
        </div>
      </section>

      <div className="container faculty-detail-layout">
        <main className="faculty-main-body">
          <section className="faculty-detail-block">
            <h2>Faculty Overview</h2>
            <p>{faculty.description}</p>
          </section>

          <section className="faculty-detail-block">
            <h2>Constituent Academic Departments</h2>
            <div className="depts-subgrid">
              {faculty.departments.map((deptName, i) => (
                <div key={i} className="dept-mini-card">
                  <div className="dept-mini-icon"><Building size={20} /></div>
                  <h4>{deptName}</h4>
                  <p>Certified instructors and dedicated subject laboratories.</p>
                </div>
              ))}
            </div>
          </section>

          <section className="faculty-detail-block">
            <h2>Associated Academic Programmes</h2>
            {relatedProgs.length > 0 ? (
              <div className="progs-sublist">
                {relatedProgs.map((p) => (
                  <div key={p.id} className="prog-mini-item">
                    <div>
                      <strong>{p.name}</strong>
                      <span className="prog-level-tag">{p.level}</span>
                    </div>
                    <Link to={`/programmes/${p.slug}`} className="btn-mini-link">
                      View Stream &rarr;
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted">Inter-faculty general curriculum streams service this division.</p>
            )}
          </section>
        </main>

        <aside className="faculty-sidebar">
          <div className="dean-card">
            <h3>Faculty Dean</h3>
            <div className="dean-info-box">
              <h4>{faculty.dean}</h4>
              <span className="dean-title">{faculty.deanTitle}</span>
              <p>Directs curriculum accreditation, subject teacher reviews, and laboratory resource allocation.</p>
              <Link to="/contact" className="btn-contact-dean">
                Contact Faculty Office &rarr;
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default FacultyDetailPage;

