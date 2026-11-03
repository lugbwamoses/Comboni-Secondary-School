import React, { useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import { Mail } from '../components/Icons.jsx';
import { useSite } from '../context/SiteContext.jsx';
import './LeadershipPage.css';

const LeadershipPage = () => {
  const { data } = useSite();
  const { leadership } = data;
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(leadership.map((member) => member.category))];

  const filteredMembers = selectedCategory === 'All'
    ? leadership
    : leadership.filter((m) => m.category === selectedCategory);

  return (
    <div className="page-wrapper leadership-page">
      <Breadcrumbs items={[{ label: 'About', link: '/about' }, { label: 'Leadership' }]} />

      <section className="page-header-banner" aria-labelledby="leadership-title">
        <div className="container">
          <span className="banner-subtitle">GOVERNANCE &amp; ADMINISTRATION</span>
          <h1 id="leadership-title" className="banner-title">School Leadership</h1>
          <p className="banner-lead">
            Meet the school patron, Archdiocesan education supervisor, and school administration.
          </p>
        </div>
      </section>

      <div className="container leadership-container">
        {/* Category Filters */}
        <div className="category-filter-pills" role="tablist" aria-label="Filter leadership categories">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-pill ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
              role="tab"
              aria-selected={selectedCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Leadership Grid */}
        <div className="leadership-cards-grid">
          {filteredMembers.map((member, index) => (
            <article key={index} className="leader-profile-card">
                <figure className="leader-photo-box">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="leader-photo" loading="lazy" />
                ) : (
                  <div className="leader-photo-placeholder" aria-hidden="true">
                    {member.name.split(' ').filter(Boolean).slice(-2).map((part) => part[0]).join('')}
                  </div>
                )}
                <figcaption className="leader-category-tag">
                  {member.category}
                </figcaption>
              </figure>

              <div className="leader-info">
                <h2 className="leader-name">{member.name}</h2>
                <span className="leader-role">{member.role}</span>
                <p className="leader-bio">{member.bio}</p>

                {member.email && <footer className="leader-footer">
                  <a href={`mailto:${member.email}`} className="leader-contact-link">
                    <Mail size={15} aria-hidden="true" />
                    <span>{member.email}</span>
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

export default LeadershipPage;

