import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import { Calendar, Users, Facebook, Twitter, Linkedin, ArrowRight } from '../components/Icons.jsx';
import { useSite } from '../context/SiteContext.jsx';
import './NewsPage.css';

const NewsDetailPage = () => {
  const { slug } = useParams();
  const { data } = useSite();
  const { news } = data;

  const article = news.find((n) => n.slug === slug);

  if (!article) {
    return <Navigate to="/news" replace />;
  }

  const related = news.filter((n) => n.id !== article.id).slice(0, 2);

  return (
    <div className="page-wrapper news-detail-page">
      <Breadcrumbs 
        items={[
          { label: 'News', link: '/news' },
          { label: article.title }
        ]} 
      />

      <article className="news-article-container">
        <header className="article-header">
          <div className="container">
            <span className="article-cat-tag">{article.category}</span>
            <h1 className="article-main-title">{article.title}</h1>
            
            <div className="article-meta-bar">
              <time className="meta-time" dateTime={article.dateTime}>
                <Calendar size={15} aria-hidden="true" /> {article.date}
              </time>
              <span className="meta-author">
                <Users size={15} aria-hidden="true" /> By {article.author}
              </span>
            </div>
          </div>
        </header>

        <div className="container article-layout">
          <main className="article-main-body">
            <figure className="article-featured-figure">
              <img src={article.image} alt={article.title} className="article-featured-img" />
            </figure>

            <div className="article-prose">
              {article.content.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Social Share Strip */}
            <div className="article-share-strip">
              <span>Share this announcement:</span>
              <div className="share-buttons">
                <a href={`https://facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">
                  <Facebook size={16} /> Facebook
                </a>
                <a href={`https://twitter.com/intent/tweet?text=${article.title}&url=${window.location.href}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter">
                  <Twitter size={16} /> Twitter / X
                </a>
                <a href={`https://linkedin.com/shareArticle?mini=true&url=${window.location.href}`} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn">
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </div>
          </main>

          {/* Related News Sidebar */}
          <aside className="article-sidebar">
            <div className="related-news-card">
              <h3>Related Dispatches</h3>
              <div className="related-items-list">
                {related.map((rel) => (
                  <article key={rel.id} className="related-micro-item">
                    <img src={rel.image} alt={rel.title} className="related-micro-img" />
                    <div>
                      <span className="rel-date">{rel.date}</span>
                      <h4><Link to={`/news/${rel.slug}`}>{rel.title}</Link></h4>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </article>
    </div>
  );
};

export default NewsDetailPage;

