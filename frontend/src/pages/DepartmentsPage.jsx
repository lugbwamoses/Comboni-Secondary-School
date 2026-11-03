import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import { Building, Users, BookOpen, ArrowRight, Search } from '../components/Icons.jsx';
import { useSite } from '../context/SiteContext.jsx';
import './DepartmentsPage.css';

const DepartmentsPage = () => {
  const { data } = useSite();
  const { departments } = data;
  const [search, setSearch] = useState('');

  const filteredDepts = departments.filter((d) => 
    d.name.toLowerCase().includes(search.toLowerCase()) ||
    d.faculty.toLowerCase().includes(search.toLowerCase()) ||
    d.hod.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-wrapper departments-page">
      <Breadcrumbs items={[{ label: 'Departments' }]} />

      <section className="page-header-banner" aria-labelledby="depts-title">
        <div className="container">
          <span className="banner-subtitle">ACADEMIC UNITS</span>
          <h1 id="depts-title" className="banner-title">Departments Directory</h1>
          <p className="banner-lead">
            Department information will be published when confirmed by the school.
          </p>
        </div>
      </section>

      <div className="container depts-container">
        <div className="dept-search-strip">
          <div className="search-box">
            <Search size={18} className="search-icon" aria-hidden="true" />
            <input
              type="search"
              placeholder="Search departments by name or head of department..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search departments"
            />
          </div>
        </div>

        <div className="depts-grid">
          {filteredDepts.length === 0 && <p className="text-muted">No department information has been published.</p>}
          {filteredDepts.map((dept) => (
            <article key={dept.id} className="dept-card">
              <div className="dept-header">
                <span className="dept-parent-faculty">{dept.faculty}</span>
                <span className="dept-staff-badge">{dept.staffCount} Staff Members</span>
              </div>

              <h2 className="dept-name">{dept.name}</h2>
              <span className="dept-hod-name">
                <strong>Head of Department:</strong> {dept.hod}
              </span>

              <p className="dept-desc">{dept.description}</p>

              <div className="dept-programmes-box">
                <span className="box-title">Associated Streams:</span>
                <ul>
                  {dept.programmes.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </div>

              <footer className="dept-card-footer">
                <Link to={`/departments/${dept.slug}`} className="btn-dept-details">
                  <span>Department Overview</span>
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DepartmentsPage;

