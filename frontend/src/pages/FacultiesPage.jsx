import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import { BookOpen, Users, Building, ArrowRight } from '../components/Icons.jsx';
import { useSite } from '../context/SiteContext.jsx';
import './FacultiesPage.css';

const FacultiesPage = () => {
  const { data } = useSite();
  const { faculties } = data;

  return (
    <div className="page-wrapper faculties-page">
      <Breadcrumbs items={[{ label: 'Faculties' }]} />

      <section className="page-header-banner" aria-labelledby="faculties-title">
        <div className="container">
          <span className="banner-subtitle">ACADEMIC DIVISIONS</span>
          <h1 id="faculties-title" className="banner-title">Faculties &amp; Academic Schools</h1>
          <p className="banner-lead">
            Faculty information will be published when confirmed by the school.
          </p>
        </div>
      </section>

      <div className="container faculties-grid-container">
        <div className="faculties-cards-grid">
          {faculties.length === 0 && <p className="text-muted">No faculty information has been published.</p>}
          {faculties.map((fac) => (
            <article key={fac.id} className="faculty-card">
              <figure className="faculty-img-box">
                <img 
                  src={fac.image} 
                  alt={fac.name} 
                  className="faculty-image"
                  loading="lazy" 
                />
                <figcaption className="faculty-depts-count">
                  {fac.departmentsCount} Departments
                </figcaption>
              </figure>

              <div className="faculty-card-content">
                <h2 className="faculty-title">{fac.name}</h2>
                <span className="faculty-dean-label">
                  <strong>Dean:</strong> {fac.dean}
                </span>

                <p className="faculty-description">{fac.description}</p>

                <div className="faculty-departments-preview">
                  <span className="dept-label">Key Departments:</span>
                  <div className="dept-tags-row">
                    {fac.departments.map((d, idx) => (
                      <span key={idx} className="dept-tag">{d}</span>
                    ))}
                  </div>
                </div>

                <footer className="faculty-card-footer">
                  <Link to={`/faculties/${fac.slug}`} className="btn-view-faculty">
                    <span>Explore Faculty &amp; Departments</span>
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </footer>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacultiesPage;

