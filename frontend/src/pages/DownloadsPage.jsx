import React, { useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import { Download, Search, FileText, Calendar } from '../components/Icons.jsx';
import { useSite } from '../context/SiteContext.jsx';
import './DownloadsPage.css';

const DownloadsPage = () => {
  const { data } = useSite();
  const { downloads } = data;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Prospectus', 'Admissions', 'Calendars', 'Fees & Policies', 'Handbooks'];

  const filteredDownloads = downloads.filter((dl) => {
    const matchesCat = selectedCategory === 'All' || dl.category === selectedCategory;
    const matchesSearch = 
      dl.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dl.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleDownloadClick = (title) => {
    alert(`Initiating download for: "${title}". (Demo document ready for presentation)`);
  };

  return (
    <div className="page-wrapper downloads-page">
      <Breadcrumbs items={[{ label: 'Downloads' }]} />

      <section className="page-header-banner" aria-labelledby="dl-title">
        <div className="container">
          <span className="banner-subtitle">OFFICIAL DOCUMENT REPOSITORY</span>
          <h1 id="dl-title" className="banner-title">Downloads &amp; School Publications</h1>
          <p className="banner-lead">
            School-approved forms and documents will be listed here when available.
          </p>
        </div>
      </section>

      <div className="container downloads-container">
        
        {/* Search & Filter Bar */}
        <div className="dl-controls-bar">
          <div className="search-box">
            <Search size={18} className="search-icon" aria-hidden="true" />
            <input
              type="search"
              placeholder="Search documents by title or keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search downloads"
            />
          </div>

          <div className="dl-cat-pills" role="tablist" aria-label="Filter documents by category">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                className={`dl-pill ${selectedCategory === c ? 'active' : ''}`}
                onClick={() => setSelectedCategory(c)}
                role="tab"
                aria-selected={selectedCategory === c}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="dl-count-strip">
          Showing <strong>{filteredDownloads.length}</strong> official documents available for public download
        </div>

        {/* Downloads Listing */}
        <div className="downloads-cards-grid">
          {filteredDownloads.length === 0 && <p className="text-muted">No documents have been published for download yet.</p>}
          {filteredDownloads.map((doc) => (
            <article key={doc.id} id={doc.id} className="download-doc-card">
              <div className="doc-top-row">
                <span className="doc-cat-tag">{doc.category}</span>
                <span className="doc-format-badge">{doc.format} &bull; {doc.size}</span>
              </div>

              <h2 className="doc-title">{doc.title}</h2>
              <span className="doc-date"><Calendar size={13} /> Published: {doc.date}</span>

              <p className="doc-desc">{doc.description}</p>

              <footer className="doc-footer">
                <button
                  type="button"
                  className="btn-download-file"
                  onClick={() => handleDownloadClick(doc.title)}
                >
                  <Download size={16} aria-hidden="true" />
                  <span>Download Document</span>
                </button>
              </footer>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
};

export default DownloadsPage;

