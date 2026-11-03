import React, { useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import { Search, Mail, BookOpen, GraduationCap } from '../components/Icons.jsx';
import { useSite } from '../context/SiteContext.jsx';
import './StaffPage.css';

const StaffPage = () => {
  const { data } = useSite();
  const { staff, faculties } = data;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFaculty, setSelectedFaculty] = useState('All');

  const filteredStaff = staff.filter((s) => {
    const matchesFaculty = selectedFaculty === 'All' || s.faculty === selectedFaculty;
    const matchesSearch = 
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.qualifications.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFaculty && matchesSearch;
  });

  return (
    <div className="page-wrapper staff-page">
      <Breadcrumbs items={[{ label: 'Staff Directory' }]} />

      <section className="page-header-banner" aria-labelledby="staff-title">
        <div className="container">
          <span className="banner-subtitle">SCHOOL COMMUNITY</span>
          <h1 id="staff-title" className="banner-title">Public Staff Directory</h1>
          <p className="banner-lead">
            Staff profiles will be listed here as the school approves them for publication.
          </p>
        </div>
      </section>

      <div className="container staff-container">
        
        {/* Controls */}
        <div className="staff-controls-bar">
          <div className="search-box">
            <Search size={18} className="search-icon" aria-hidden="true" />
            <input
              type="search"
              placeholder="Search faculty by name, subject, or qualifications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search staff members"
            />
          </div>

          <div className="filter-selects">
            <select
              value={selectedFaculty}
              onChange={(e) => setSelectedFaculty(e.target.value)}
              aria-label="Filter staff by faculty"
            >
              <option value="All">All Faculties</option>
              {faculties.map((f) => (
                <option key={f.id} value={f.name}>{f.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Counter */}
        <div className="staff-count">
          Showing <strong>{filteredStaff.length}</strong> published staff profiles
        </div>

        {/* Staff Cards Grid */}
        <div className="staff-cards-grid">
          {filteredStaff.length === 0 && <p className="text-muted">No individual staff profiles have been published yet.</p>}
          {filteredStaff.map((person) => (
            <article key={person.id} id={person.id} className="staff-directory-card">
              <figure className="staff-photo-col">
                <img src={person.image} alt={person.name} className="staff-img" loading="lazy" />
              </figure>

              <div className="staff-info-col">
                <span className="staff-dept-badge">{person.department}</span>
                <h2 className="staff-name">{person.name}</h2>
                <span className="staff-position">{person.position}</span>
                
                <div className="staff-qual-box">
                  <GraduationCap size={15} aria-hidden="true" />
                  <span>{person.qualifications}</span>
                </div>

                <p className="staff-bio">{person.bio}</p>

                {person.email && <footer className="staff-footer">
                  <a href={`mailto:${person.email}`} className="staff-email-link">
                    <Mail size={15} aria-hidden="true" />
                    <span>{person.email}</span>
                  </a>
                </footer>}
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
};

export default StaffPage;

