import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, MapPin } from '../components/Icons.jsx';
import { useSite } from '../context/SiteContext.jsx';
import './Error404Page.css';

const Error404Page = () => {
  const { openSearch } = useSite();

  return (
    <div className="page-wrapper error-404-page">
      <div className="container error-container">
        <div className="error-card">
          <span className="error-code">404</span>
          <h1>Page Not Found</h1>
          <p className="error-message">
            The page or document you requested does not exist, has been archived, or moved to another section of the St. Daniel Comboni Secondary School website.
          </p>

          <div className="error-actions-group">
            <Link to="/" className="btn-error-primary">
              Return to Homepage &rarr;
            </Link>
            <button 
              type="button" 
              className="btn-error-search"
              onClick={openSearch}
            >
              <Search size={16} /> Search Website
            </button>
            <Link to="/contact" className="btn-error-outline">
              Contact Administration
            </Link>
          </div>

          <div className="error-quick-directory">
            <span>Explore Common Sections:</span>
            <div className="dir-links">
              <Link to="/admissions">Admissions</Link>
              <Link to="/programmes">Academic Programmes</Link>
              <Link to="/downloads">Downloads &amp; Forms</Link>
              <Link to="/news">News &amp; Events</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404Page;

