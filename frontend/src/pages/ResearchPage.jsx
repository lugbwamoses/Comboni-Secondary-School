import React, { useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import { Search, Download, BookOpen, ChevronDown, CheckCircle2 } from '../components/Icons.jsx';
import { useSite } from '../context/SiteContext.jsx';
import './ResearchPage.css';

const ResearchPage = () => {
  const { data } = useSite();
  const { research } = data;
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedAbstract, setExpandedAbstract] = useState(null);

  const filteredPubs = research.publications.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page-wrapper research-page">
      <Breadcrumbs items={[{ label: 'Research & Innovation' }]} />

      <section className="page-header-banner" aria-labelledby="research-title">
        <div className="container">
          <span className="banner-subtitle">SCHOOL INFORMATION</span>
          <h1 id="research-title" className="banner-title">Research</h1>
          <p className="banner-lead">
            School research information will be published when confirmed.
          </p>
        </div>
      </section>

      <div className="container research-container">
        
        {/* Research Overview */}
        <section className="research-intro-card" aria-labelledby="intro-head">
          <span className="section-eyebrow">RESEARCH INFORMATION</span>
          <h2 id="intro-head">School Research</h2>
          <p>{research.overview}</p>
        </section>

        {/* Research Areas */}
        <section className="research-areas-section" aria-labelledby="areas-head">
          <h2 id="areas-head" className="section-heading">Research Areas</h2>
          <div className="areas-grid">
            {research.areas.length === 0 && <p className="text-muted">No research areas have been published yet.</p>}
            {research.areas.map((area, idx) => (
              <article key={idx} className="research-area-card">
                <span className="area-number" aria-hidden="true">0{idx + 1}</span>
                <h3>{area.title}</h3>
                <span className="area-lead-name">
                  <strong>Principal Investigator:</strong> {area.lead}
                </span>
                <p>{area.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Publications Listing */}
        <section id="publications" className="publications-section" aria-labelledby="pubs-head">
          <div className="pubs-header-row">
            <div>
              <span className="section-eyebrow">PUBLICATIONS</span>
              <h2 id="pubs-head" className="section-heading">Research Publications</h2>
            </div>

            <div className="pubs-search-box">
              <Search size={16} aria-hidden="true" />
              <input
                type="search"
                placeholder="Search publications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search research publications"
              />
            </div>
          </div>

          <div className="publications-list">
            {filteredPubs.length === 0 && <p className="text-muted">No research publications have been published yet.</p>}
            {filteredPubs.map((pub) => {
              const isExpanded = expandedAbstract === pub.id;
              return (
                <article key={pub.id} id={`publication-${pub.id}`} className="publication-card">
                  <div className="pub-meta-top">
                    <span className="pub-category-tag">{pub.category}</span>
                    <span className="pub-year-tag">{pub.year}</span>
                  </div>

                  <h3 className="pub-title">{pub.title}</h3>
                  <span className="pub-authors">{pub.authors}</span>
                  <span className="pub-publisher">{pub.publisher}</span>

                  <div className="pub-actions-row">
                    <button
                      type="button"
                      className="btn-toggle-abstract"
                      onClick={() => setExpandedAbstract(isExpanded ? null : pub.id)}
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? 'Hide Abstract' : 'View Abstract'}</span>
                      <ChevronDown size={14} className={`chevron-icon ${isExpanded ? 'rotated' : ''}`} />
                    </button>

                    {pub.link?.startsWith('https://') || pub.link?.startsWith('http://') ? (
                      <a href={pub.link} className="btn-download-pdf" target="_blank" rel="noreferrer">
                        <Download size={14} /> Open publication
                      </a>
                    ) : (
                      <span className="pub-link-unavailable">Publication link not provided</span>
                    )}
                  </div>

                  {isExpanded && (
                    <div className="pub-abstract-box">
                      <h4>Abstract</h4>
                      <p>{pub.abstract}</p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
};

export default ResearchPage;

