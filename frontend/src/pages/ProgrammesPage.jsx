import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import { Search, Clock, BookOpen, ArrowRight } from '../components/Icons.jsx';
import { useSite } from '../context/SiteContext.jsx';
import './ProgrammesPage.css';

const ProgrammesPage = () => {
  const { data } = useSite();
  const { programmes } = data;

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('All');

  const filteredProgrammes = programmes.filter((p) => {
    const matchesSearch = 
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.overview.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.code.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesLevel = selectedLevel === 'All' || p.level.toLowerCase().includes(selectedLevel.toLowerCase());

    return matchesSearch && matchesLevel;
  });

  return (
    <div className="page-wrapper programmes-page">
      <Breadcrumbs items={[{ label: 'Academic Programmes' }]} />

      <section className="page-header-banner" aria-labelledby="programmes-title">
        <div className="container">
          <span className="banner-subtitle">SECONDARY SCHOOL</span>
          <h1 id="programmes-title" className="banner-title">Classes &amp; Streams</h1>
          <p className="banner-lead">
            Explore the four senior classes and their streams at St. Daniel Comboni Secondary School.
          </p>
        </div>
      </section>

      <div className="container programmes-container">
        
        {/* Filtering & Search Bar */}
        <div className="programmes-filter-bar">
          <div className="search-box">
            <Search size={18} className="search-icon" aria-hidden="true" />
            <input
              type="search"
              placeholder="Search classes or streams..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search classes and streams"
            />
          </div>

          <div className="filter-selects">
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              aria-label="Filter by level"
            >
              <option value="All">All Levels</option>
              <option value="Senior 1">Senior 1</option>
              <option value="Senior 2">Senior 2</option>
              <option value="Senior 3">Senior 3</option>
              <option value="Senior 4">Senior 4</option>
            </select>
          </div>
        </div>

        {/* Results Counter */}
        <div className="results-counter">
          Showing <strong>{filteredProgrammes.length}</strong> class streams
        </div>

        {/* Programmes Grid */}
        {filteredProgrammes.length > 0 ? (
          <div className="programmes-cards-grid">
            {filteredProgrammes.map((prog) => (
              <article key={prog.id} className="programme-listing-card">
                <div className="card-top">
                  <span className="prog-code-pill">{prog.code}</span>
                  <span className="prog-level-pill">{prog.level}</span>
                </div>

                <h2 className="prog-name">{prog.name}</h2>
                <span className="prog-faculty-name">{prog.faculty}</span>

                <p className="prog-summary">{prog.overview}</p>

                <div className="prog-meta-strip">
                  <span className="meta-info">
                    <Clock size={15} aria-hidden="true" /> {prog.duration}
                  </span>
                  <span className="meta-info">
                    <BookOpen size={15} aria-hidden="true" /> {prog.department}
                  </span>
                </div>

                <footer className="prog-card-footer">
                  <Link to={`/programmes/${prog.slug}`} className="btn-view-programme">
                    <span>View Class Details</span>
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </footer>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-results-box">
            <p>No programmes match your current filter selections.</p>
            <button 
              type="button" 
              className="btn-reset-filters"
              onClick={() => {
                setSearchTerm('');
                setSelectedLevel('All');
              }}
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default ProgrammesPage;

