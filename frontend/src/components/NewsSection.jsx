import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from './Icons.jsx';
import { useSite } from '../context/SiteContext.jsx';
import './NewsSection.css';

const NewsSection = () => {
  const { data } = useSite();
  const articles = data.news.slice(0, 3);

  return (
    <section id="news" className="news-section" aria-labelledby="news-heading">
      <div className="container">
        <header className="news-header text-center">
          <span className="section-eyebrow">LATEST NEWS &amp; UPDATES</span>
          <h2 id="news-heading" className="section-heading">News from the School</h2>
          <p className="news-lead">Updates and announcements from St. Daniel Comboni Secondary School.</p>
        </header>

        {articles.length ? (
          <div className="news-grid">
            {articles.map((article) => (
              <article key={article.id} className="news-card">
                <figure className="news-figure">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="news-image"
                    loading="lazy"
                  />
                  <figcaption className="news-pill-tag">{article.category}</figcaption>
                </figure>
                <div className="news-body">
                  <time className="news-date-badge" dateTime={article.dateTime}>
                    <Calendar size={14} aria-hidden="true" />
                    <span>{article.date}</span>
                  </time>
                  <h3 className="news-title">{article.title}</h3>
                  <p className="news-excerpt">{article.excerpt}</p>
                  <footer className="news-footer">
                    <Link to={`/news/${article.slug}`} className="news-read-link">
                      Read More <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </footer>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="text-muted">No news has been published yet.</p>
        )}

        <div className="news-section-action">
          <Link to="/news" className="btn-outline">View All News</Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
