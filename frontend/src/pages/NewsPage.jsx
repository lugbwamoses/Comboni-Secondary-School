import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import { Calendar, Search, ArrowRight, Users } from '../components/Icons.jsx';
import { useSite } from '../context/SiteContext.jsx';
import './NewsPage.css';

const NewsPage = () => {
  const { data } = useSite();
  const { news } = data;
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Academic Excellence', 'Campus Facilities', 'Sports & Culture'];

  const filteredNews = news.filter((n) => {
    const matchesCategory = activeCategory === 'All' || n.category === activeCategory;
    const matchesSearch = 
      n.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      n.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featured = news[0];

  return (
    <div className="page-wrapper news-page">
      <Breadcrumbs items={[{ label: 'News & Announcements' }]} />

      <section className="page-header-banner" aria-labelledby="news-title">
        <div className="container">
          <span className="banner-subtitle">CAMPUS DISPATCHES</span>
          <h1 id="news-title" className="banner-title">News &amp; Official Bulletins</h1>
          <p className="banner-lead">
            School announcements and updates will be published here.
          </p>
        </div>
      </section>

      <div className="container news-container">
        
        {/* Featured Story Spotlight */}
        {featured && activeCategory === 'All' && !searchTerm && (
          <article className="featured-news-spotlight">
            <figure className="spotlight-image-col">
              <img src={featured.image} alt={featured.title} className="spotlight-img" />
              <figcaption className="spotlight-badge">Featured Story</figcaption>
            </figure>
            <div className="spotlight-content-col">
              <div className="spotlight-meta">
                <span className="news-cat-tag">{featured.category}</span>
                <span className="news-date-text">{featured.date}</span>
              </div>
              <h2 className="spotlight-title">{featured.title}</h2>
              <p className="spotlight-excerpt">{featured.excerpt}</p>
              <Link to={`/news/${featured.slug}`} className="btn-read-featured">
                <span>Read Full Story</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </article>
        )}

        {/* Filter Bar */}
        <div className="news-controls-row">
          <div className="news-cats-pills" role="tablist" aria-label="Filter news by category">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                className={`news-cat-pill ${activeCategory === c ? 'active' : ''}`}
                onClick={() => setActiveCategory(c)}
                role="tab"
                aria-selected={activeCategory === c}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="news-search-box">
            <Search size={16} aria-hidden="true" />
            <input
              type="search"
              placeholder="Search news stories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search news"
            />
          </div>
        </div>

        {/* News Grid */}
        <div className="news-articles-grid">
          {filteredNews.map((article) => (
            <article key={article.id} className="news-feed-card">
              <figure className="feed-card-figure">
                <img src={article.image} alt={article.title} className="feed-card-img" loading="lazy" />
                <figcaption className="feed-cat-badge">{article.category}</figcaption>
              </figure>

              <div className="feed-card-body">
                <time className="feed-card-date" dateTime={article.dateTime}>
                  <Calendar size={13} aria-hidden="true" /> {article.date}
                </time>

                <h3 className="feed-card-title">{article.title}</h3>
                <p className="feed-card-excerpt">{article.excerpt}</p>

                <footer className="feed-card-footer">
                  <Link to={`/news/${article.slug}`} className="feed-card-link">
                    Read Story <ArrowRight size={14} aria-hidden="true" />
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

export default NewsPage;

